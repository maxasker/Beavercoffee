'use strict';
const models = require('../../models');
const menuController = require('./menu.controller.js');
const customerController = require('./customerController.js');
const {ObjectId} = require('mongodb');
const productController = require('./product.controller.js')

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
            bev += 1;
            if(bev >= 10){
              bev = 0;
          }
      }

      return sumPrices(data.items, sum, parseInt(res.beverages))
      .then(function (newSum) {
				if(res.isEmployee = true) newSum = (newSum*0.9);
          data.price=newSum;
          const Order = new models.Order(data);
          return Order.save()
              .then(function (res){
              let orderId = res;
              return customerController.updateBeverages(ObjectId(res.customer_id), bev)
              .then(function(res){
                return models.Order.findById(orderId)
                .then(function (res) {
                    let ingredientCheck = data.items.map(function(item) {
                    return menuController.getMenuItem(item.menu_item)
                    .then(function (res) {
                      return updateAmount(res, orderId)
                      .then(function(results) {
                        return results;
                      })
                    })
                    })
                    return Promise.all(ingredientCheck)
                    .then(function(){
                      return models.Order.findById(orderId);
                    })
                    .catch(function (err) {
                      return Promise.reject(err);
                    })
                  }) //here
              })
        })
      })
  })
}

function updateAmount(res, orderId) {
  let check = res.ingredients.map(function (ingredient) {
    return productController.updateAmount(ingredient.product, ingredient.amount, orderId)
    .then(function (res) {
      return models.Order.findById(orderId)
      .then(function () {
        return Promise.resolve()
      })
    })
})
return Promise.all(check);
}

function sumPrices (menu_items, sum, beverages) {
var i=0;
  let allPromises = menu_items.map(function (item) {
				console.log(item.menu_item);
        return menuController.getMenuItem(item.menu_item)
        .then(function (res) {
            var discount = 0.00;

            i += parseInt(item.quantity);
            if((beverages+i) >= 10){
                    discount = res.price;
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
