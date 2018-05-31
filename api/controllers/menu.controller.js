'use strict';
const models = require('../../models');
const {ObjectId} = require('mongodb');

function create () {
  const Menu = new models.Menu();
  return Menu.save();
}

function createMenuItem (data) {
  const MenuItem = new models.MenuItem(data);
  return MenuItem.save();
}

function getAllMenuItems (storeId) {
  return models.Store.findById(storeId)
  .then(function (results) {
    return models.Menu.findById(results.menu)
    .then(function (result) {
      console.log(result);
    });
  });
}
function linkToMenu (menuItemId, menuId) {
  const updateData = {};
  updateData['menu_items'] = menuItemId;
  const pushObj = {
    $push: updateData
  };
  return models.Menu.findOneAndUpdate(
    {_id: ObjectId(menuId._id)},
    pushObj,
    {new: true}
  );
}

function addToMenu (data, menuId) {
  return createMenuItem(data)
  .then(function (results) {
    return linkToMenu(results._id, menuId)
    .then(function (result) {
      console.log(result);
      return Promise.resolve(results);
    });
  });
}

function addMenuItem (data, storeId) {
  if (!ObjectId.isValid(storeId)) {
    return Promise.reject(new TypeError(`Invalid id: ${storeId}`));
  }
  return models.Store.findById(ObjectId(storeId))
  .then(function (results) {
    return addToMenu(data, results.menu)
    .then(function (results) {
      return Promise.resolve(results);
    });
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

function findOne (storeId) {
  return models.Store.findById(storeId)
  .then(function (res) {
    return res.menu;
  });
}

module.exports = {
  create,
  findAll,
  findOne,
  update,
  addMenuItem,
  getAllMenuItems
};
