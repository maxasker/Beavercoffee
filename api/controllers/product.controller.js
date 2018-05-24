'use strict';
const models = require('../../models');

function create () {
  const Product = new models.Product();
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
