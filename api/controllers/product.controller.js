'use strict';
const models = require('../../models');
const storageController = require('./storage.controller.js');
const {ObjectId} = require('mongodb');

//data = req.body, storage = req.params.storeId
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

function findAll (storeId) {
  return models.Store.findById(ObjectId(storeId))
  .then(function (res) {
    return storageController.findOne(res.storage)
    .then(function (results) {
      return returnProducts(results)
      .then(function (result) {
        let newobj = {};
        for (let i = 0; i < result.length; i++) {
          for (let key in result[i]) {
            newobj[key] = result[i][key][0];
          }
        }
        return newobj;
      });
    });
  });
}

function returnProducts (storageData) {
  let productPromises = storageData.products.map(function (productId) {
    return findOne(productId)
    .then(function (result) {
      let newobj = {};
      newobj[result.name] = [result._id];
      return newobj;
    });
  });
  return Promise.all(productPromises);
}

function findOne (id) {
  return models.Product.findById(ObjectId(id));
}

function updateAmount (id, amount, order) {
  // console.log('id:' + id);
  return models.Product.findById(ObjectId(id))
  .then(function (res) {
    if ((res.quantity.total_amount-amount) < 0) {
      return models.Order.deleteOne(order._id)
      .then(function () {
        return Promise.reject(new Error('Amount of ' + res.name + ' is too low.'));
      })
    }
    let newAmount = res.quantity.total_amount - amount;
    return models.Product.findOneAndUpdate({_id: id}, {quantity: {total_amount: newAmount, metric: res.quantity.metric, pkg_amount: newAmount}})
  })
  .catch(function(err){
    return Promise.reject(order)
    //return Promise.reject('Orders created');
  })
}

module.exports = {
  create,
  findAll,
  findOne,
  updateAmount
};
