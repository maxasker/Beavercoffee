'use strict';
const models = require('../../models');
const storageController = require('./storage.controller');
const menuController = require('./storage.controller');
const {ObjectId} = require('mongodb');

// Skapar en store, skapar sedan en menu och storage och länkar ihop dem
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

// enkel findALL
function findAll () {
  return models.Store.find();
}

// enkel fineOne
function findOne (id) {
  return models.Store.findById(id);
}

// tar emot ett storeId som den länkar ihop med linkName (tex storage) och linkId (id på storage)
function linkStoreProps (storeId, linkName, linkId) {
  const updateData = {};
  updateData[linkName] = linkId;
  return models.Store.updateOne({_id: storeId}, {$set: updateData})
  .catch(function (err) {
    console.log(err);
    return err;
  });
}

function addToStore (storeId, type, newId) {
  if (!ObjectId.isValid(storeId)) {
    return Promise.reject(new TypeError(`Invalid id: ${storeId}`));
  }
  const updateData = {};
  updateData[type] = newId;
  var pushObj = {
    $push: updateData
  };
  return models.Store.findOneAndUpdate(
    {_id: ObjectId(storeId)},
    pushObj,
    {new: true}
  );
}

// Skapar storage och menu, kallar på linkStoreProps efter varje
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
  findOne,
  addToStore
};
