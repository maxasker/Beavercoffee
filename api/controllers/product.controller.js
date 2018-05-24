'use strict';
const models = require('../../models');

function create (data) {
  const Product = new models.Product(data);
  return Product.save();
}

function findAll () {
  return models.Product.find();
}

function findOne (id) {
  return models.Product.findById(id);
}

function updateAmount (id) {

}

module.exports = {
  create,
  findAll,
  findOne,
  updateAmount
};
