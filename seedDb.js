'use strict';
const productController = require('./api/controllers/product.controller.js');
const storeController = require('./api/controllers/store.Controller.js');
const employeeController = require('./api/controllers/employeeController.js');
const menuController = require('./api/controllers/menu.controller.js');
const seedData = require('./seederJson.js');
const customerController = require('./api/controllers/customerController.js');
let storeIds = [];

function seed () {
  return seedStores()
  .then(function () {
    return seedEmployees()
    .then(function () {
      return seedProducts()
      .then(function () {
        return seedMenuItems()
        .then(function () {
          return seedCustomers();
        });
      });
    });
  });
}

function seedCustomers () {
  let customerPromises = seedData.customers.map(function (customer) {
    customerController.feedData(customer)
    .then(function () {
      return Promise.resolve();
    });
  });
  return Promise.all(customerPromises);
}

function seedMenuItems () {
  let storePromises = storeIds.map(function (storeId) {
    return productController.findAll(storeId)
    .then(function (results) {
      return createMenuItems(results, storeId);
    });
  });
  return Promise.all(storePromises);
}

function createMenuItems (products, storeId) {
  const menuItems = seedData.menuItems();
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i]['name'] === 'Hot Chocolate') {
      menuItems[i]['ingredients'].push(
        {
          'product': products['Cocoa Mix'],
          'amount': '0.1',
          'metric': 'kg'
        }
      );
    } else if (menuItems[i]['name'] === 'Whipped Cream') {
      menuItems[i]['ingredients'].push(
        {
          'product': products['Whipped Cream'],
          'amount': '0.1',
          'metric': 'l'
        }
      );
    } else if (menuItems[i]['name'] === 'Latte') {
      menuItems[i]['ingredients'].push(
        {
          'product': products['Espresso Roast'],
          'amount': '0.1',
          'metric': 'kg'
        }
      );
    } else if (menuItems[i]['name'] === 'Capuccino') {
      menuItems[i]['ingredients'].push(
        {
          'product': products['Espresso Roast'],
          'amount': '0.1',
          'metric': 'kg'
        }
      );
    } else if (menuItems[i]['name'] === 'Skim Milk') {
      menuItems[i]['ingredients'].push(
        {
          'product': products['Skim Milk'],
          'amount': '0.3',
          'metric': 'l'
        }
      );
    } else if (menuItems[i]['name'] === '2%Milk') {
      menuItems[i]['ingredients'].push(
        {
          'product': products['2%Milk'],
          'amount': '0.3',
          'metric': 'l'
        }
      );
    } else if (menuItems[i]['name'] === 'Soy Milk') {
      menuItems[i]['ingredients'].push(
        {
          'product': products['Soy Milk'],
          'amount': '0.3',
          'metric': 'l'
        }
      );
    } else if (menuItems[i]['name'] === 'Vanilla Syrup') {
      menuItems[i]['ingredients'].push(
        {
          'product': products['Vanilla Syrup'],
          'amount': '0.01',
          'metric': 'l'
        }
      );
    } else if (menuItems[i]['name'] === 'Caramel Syrup') {
      menuItems[i]['ingredients'].push(
        {
          'product': products['Caramel Syrups'],
          'amount': '0.01',
          'metric': 'l'
        }
      );
    } else if (menuItems[i]['name'] === 'Irish Cream Syrup') {
      menuItems[i]['ingredients'].push(
        {
          'product': products['Skim Milk'],
          'amount': '0.3',
          'metric': 'kg'
        }
      );
    }
  }
  return addMenuItems(menuItems, storeId);
}

function addMenuItems (menuItems, storeId) {
  let menuItemsPromises = menuItems.map(function (menuItem) {
    return menuController.findOne(storeId)
    .then(function (res) {
      return menuController.addMenuItem(menuItem, storeId)
      .then(function (res) {
        return Promise.resolve();
      });
    });
  });
  Promise.all(menuItemsPromises);
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
