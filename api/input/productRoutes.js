'use strict';
const models = require('../../models');
const storeController = require('../controllers/store.Controller.js');
const storageController = require('../controllers/storage.controller.js');
const productController = require('../controllers/product.controller.js');

//create new product
function create (req, res) {
  productController.create(req.body, req.params.storeId)
  .then(function (results) {
    handleResponse(res, results);
  })
  .catch(function (err) {
    handleError(res, err);
  });
}

//find product
function findOne (req, res) {
    productController.findOne(req.params.productId)
  .then(function (results) {
    handleResponse(res, results);
  })
  .catch(function (err) {
    handleError(res, err);
  });
}

// update amount
function update (req, res) {
    productController.updateAmount(req.params.productId, req.body.total_amount)
  .then(function (result) {
    handleResponse(res, result);
  })
  .catch(function (err) {
    handleError(res, err);
  });
}

// list products
function listAll (req, res) {
	models.Product.find()
	.then(function (result) {
		handleResponse(res, result);
	})
	.catch(function (err) {
		handleError(res, err);
	});
}

// Error handler
const handleError = (res, err) => {
  return res.status(500).send(String(err));
};

// Response handler
const handleResponse = (res, result) => {
  res.send(result);
};

module.exports = {
  create,
	findOne,
    listAll,
    update
}
