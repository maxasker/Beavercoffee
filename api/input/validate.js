'use strict';
const models = require('../../models');

function validateStore (storeId) {
  models.Store.findById(storeId)
  .then(function (result) {
    return true;
  })
  .catch(function (err) {
    console.log(err);
    return Promise.reject(new Error('StoreId does not exist, check your URL.'));
  });
}

module.exports = {
  validateStore
};
