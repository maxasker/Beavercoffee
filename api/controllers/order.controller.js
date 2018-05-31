'use strict';
const models = require('../../models');

function create (data) {
   // let test;
    let menu_items = data.items;
    var sum = 0.00;

    menu_items.forEach(function(item){
        sum = sum + parseInt(item.quantity);
    });
    data.price = sum;

  const Order = new models.Order(data);
  return Order.save();
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
