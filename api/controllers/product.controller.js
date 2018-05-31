'use strict';
const models = require('../../models');
const storageController = require('./storage.controller.js');

function create (data, storage) {
  let productId;
  const Product = new models.Product(data);
  return Product.save()
  .then(function (res) {
    productId = res._id;
    return storageController.addProduct(storage, res._id)
    .then(function () {
      return findOne(productId);
    });
  });
}

function findAll () {
  return models.Product.find();
}

function findOne (id) {
  return models.Product.findById(id);
}

function updateAmount (id, amount) {
    return models.Product.findOneAndUpdate({_id: id}, {quantity: {total_amount: amount}});
}

module.exports = {
  create,
  findAll,
  findOne,
  updateAmount
};
