'use strict';
const models = require('../../models');
const {ObjectId} = require('mongodb');

function create () {
  const Storage = new models.Storage();
  return Storage.save();
}

function findAll () {
  return models.Storage.find();
}

function findOne (id) {
  return models.Storage.findById(id);
}

function addProduct (storage, productId) {

    var pushObj = {
    $push: {products: productId}
  };

    return models.Storage.findOneAndUpdate(
        {_id:storage}, pushObj,
        {new: true}
    );
}

module.exports = {
  create,
  findAll,
  findOne,
    addProduct
};
