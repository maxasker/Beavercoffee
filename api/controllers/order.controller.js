'use strict';
const models = require('../../models');

function create (data, storage) {

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
