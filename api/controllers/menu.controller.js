'use strict';
const models = require('../../models');
const {ObjectId} = require('mongodb');
const storeController = require('./store.Controller.js');

function create () {
  const Menu = new models.Menu();
  return Menu.save();
}

function addMenuItem (data, storeId) {
  if (!ObjectId.isValid(storeId)) {
    return Promise.reject(new TypeError(`Invalid id: ${storeId}`));
  }
  return storeController.findOneStore(ObjectId(storeId))
  .then(function (results) {
    var pushObj = {
      $push: data
    };
    return models.Store.findOneAndUpdate(
      {_id: ObjectId(results._id)},
      pushObj,
      {new: true}
    );
  });
}

function update (data, storeId) {
  return models.Store.updateOne({_id: storeId}, {$set: data})
  .catch(function (err) {
    console.log(err);
    return err;
  });
}

function findAll () {
  return models.Menu.find();
}

function findOne (id) {
  return models.Menu.findById(id);
}

module.exports = {
  create,
  findAll,
  findOne,
  update,
  addMenuItem
};
