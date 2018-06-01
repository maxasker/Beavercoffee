'use strict';
const models = require('../../models');
const menuController = require('./menu.controller.js');
const customerController = require('./customerController.js');

const {ObjectId} = require('mongodb');

//OBS - OM VAR TIONDE KAFFE
function create (data) {
  let sum = 0.00;

  return customerController.getData(ObjectId(data.customer_id))
  .then(function (res){
//      console.log('bvrg' + {res});

      return sumPrices(data.items, sum)
      .then(function (newSum) {
          console.log(newSum)
          data.price=newSum;
          const Order = new models.Order(data);
          return Order.save();
      })
  });
}


//hämta antalet beverages för vald kund
/*function nbrBeverages (customerId){
     return customerController.getData(ObjectId(customerId));
        .then(function (res) {
          console.log(res.beverages);
         return
     });
}*/

function sumPrices (menu_items, sum) {
  let allPromises = menu_items.map(function (item) {
        return menuController.getMenuItem(ObjectId(item.type))
        .then(function (res) {
          console.log(parseFloat(res.price));
          console.log(parseFloat(item.quantity));
          sum = sum + (parseFloat(res.price)*parseFloat(item.quantity));
        })
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
