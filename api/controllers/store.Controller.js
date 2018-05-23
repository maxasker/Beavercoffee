'use strict';
const models = require('../../models');
const storageController = require('./storage.controller');
const menuController = require('./storage.controller');

function create (data) {
  let storeId;
  const Store = new models.Store(data);
  return Store.save()
  .then(function (result) {
    storeId = result._id;
    return createStoreFields(result._id)
    .then(function (res) {
      return findOne(storeId);
    });
  })
  .catch(function (err) {
    return err;
  });
}

function findAll () {
  return models.Store.find();
}

function findOne (id) {
  return models.Store.findById(id);
}

function linkStoreProps (storeId, linkName, linkId) {
  const updateData = {};
  updateData[linkName] = linkId;
  return models.Store.updateOne({_id: storeId}, {$set: updateData})
  .catch(function (err) {
    console.log(err);
    return err;
  });
}

function createStoreFields (storeId) {
  return storageController.create()
  .then(function (results) {
    return linkStoreProps(storeId, 'storage', results._id)
    .then(function () {
      return menuController.create()
      .then(function (results) {
        return linkStoreProps(storeId, 'menu', results._id)
        .then(function () {
          return Promise.resolve();
        });
      });
    });
  })
  .catch(function (err) {
    Promise.reject(err);
  });
}

module.exports = {
  create,
  findAll,
  findOne
};
