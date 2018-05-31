'use strict';
const models = require('../../models');

function create (data) {
   // let test;
  const Order = new models.Order(data);
  return Order.save();
//  then(function (res)){

    //   }
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
