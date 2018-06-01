'use strict';
const models = require('../../models');
const menuController = require('./menu.controller.js');
const customerController = require('./customerController.js');
const {ObjectId} = require('mongodb');

function create (data) {
let sum = 0.00;
let bev = 0; //antalet beverages som kunden har på sitt kort
let nbrBev = 0; //antalet beverages som kunden lagt i denna beställning

  return customerController.getData(ObjectId(data.customer_id))
  .then(function (res){
    bev = parseInt(res.beverages);
      var i;
      for(i=0; i<data.items.length; i++){
        nbrBev += parseInt(data.items[i].quantity);
      }

      var j, max = 10;
      for(j=1; j<=nbrBev; j++){
            console.log(j);
            bev += 1;
            if(bev >= 10){
              bev = 0;
          }
      }

      return sumPrices(data.items, sum, parseInt(res.beverages))
      .then(function (newSum) {
          data.price=newSum;
          const Order = new models.Order(data);
          return Order.save()
              .then(function (res){
              let orderId = res;
              return customerController.updateBeverages(ObjectId(res.customer_id), bev).then(function(res){
                return models.Order.findById(orderId);
        })
      })
    })
  });
}

function sumPrices (menu_items, sum, beverages) {
var i=0;

  let allPromises = menu_items.map(function (item) {
        return menuController.getMenuItem(ObjectId(item.type))
        .then(function (res) {
            var discount = 0.00;
            console.log(item.quantity);
            console.log(res.price);

            i += parseInt(item.quantity);
            if((beverages+i) >= 10){
                    discount = res.price;
                    console.log(beverages + ' ' + i);
                    console.log('dis:' + discount);
                    beverages = 0;
                    i = 0;
                   }

        //dra av ingridienser ?

        //beräkna summa och dra av discount
          sum = sum + (((parseFloat(res.price)*parseFloat(item.quantity)))-discount);
        });
    })
    return Promise.all(allPromises)
    .then(function (){
        return Promise.resolve(sum);
    })
}

function findAll () {
  return models.Order.find();
}

function findOne (id) {
  return models.Order.findById(id);
}

function deleteOne (id) {

}

module.exports = {
  create,
  findAll,
  findOne,
    deleteOne
};
