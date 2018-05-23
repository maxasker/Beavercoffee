'use strict';
const models = require('../../models');

function create () {
  const Order = new models.Order();
  return Order.save();
}

function findAll () {
  return models.Order.find();
}

function findOne (id) {
  return models.Order.findById(id);
}

module.exports = {
  create,
  findAll,
  findOne
};
