'use strict';
const productController = require('./api/controllers/product.controller.js');
const storeController = require('./api/controllers/store.Controller.js');
const employeeController = require('./api/controllers/employeeController.js');
const seedData = require('./seederJson.js');
let storeIds = [];

function seed () {
  return seedStores()
  .then(function () {
    return seedEmployees()
    .then(function () {
      return seedProducts()
      .then(function () {
        return Promise.resolve();
      });
    });
  });
}

function seedProducts () {
  let storeMainPromises = storeIds.map(function (storeId) {
    let productPromises = seedData.products().map(function (product) {
      return storeController.findOne(storeId)
      .then(function (results) {
        return productController.create(product, results.storage)
        .then(function (res) {
          Promise.resolve();
        });
      });
    });
    return Promise.all(productPromises);
  });
  return Promise.all(storeMainPromises);
}

function seedEmployees () {
  let storeMainPromises = storeIds.map(function (storeId) {
    let employeePromises = seedData.employees.map(function (employee, index) {
      return employeeController.create(employee)
      .then(function (res) {
        return storeController.addToStore(storeId, 'employees', res._id);
      });
    });
    Promise.all(employeePromises);
  });
  return Promise.all(storeMainPromises);
}

function seedStores () {
  let storePromises = seedData.stores.map(function (store) {
    return storeController.create(store)
    .then(function (res) {
      storeIds.push(res._id);
      Promise.resolve();
    });
  });
  return Promise.all(storePromises);
}

module.exports = {
  seed
};
