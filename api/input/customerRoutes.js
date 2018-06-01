'use strict';

const customerController = require('../controllers/customerController');


// post customer
function input (req, res) {
  return customerController.feedData(req.body)
  .then(function (result) {
    handleResponse(res, result);
  })
  .catch(function (err) {
    handleError(res, err);
  });
};

//get all customers
function getCustomers (req, res) {
	return customerController.getAllCustomers()
	.then(function (result) {
    handleResponse(res, result);
  })
  .catch(function (err) {
    handleError(res, err);
  });
};

//get customer
function getCustomer (req, res) {
     return customerController.getData(req.params.customerId)
  .then(function (result) {
    handleResponse(res, result);
  })
  .catch(function (err) {
    handleError(res, err);
  });
};

// update customer (OBS ALL DATA)
function updateCustomer (req, res) {
    return customerController.updateData(req.params.customerId, req.body)
  .then(function (result) {
    handleResponse(res, result);
  })
  .catch(function (err) {
    handleError(res, err);
  });
};

// update beverages
function updateBeverages (req, res) {
    return customerController.updateBeverages(req.params.customerId, req.body)
  .then(function (result) {
    handleResponse(res, result);
  })
  .catch(function (err) {
    handleError(res, err);
  });
};

// Error handler
const handleError = (res, err) => {
  return res.status(500).send(String(err));
};

// Response handler
const handleResponse = (res, result) => {
  res.send(result);
};

module.exports = {
  input,
    getCustomer,
    updateCustomer,
    updateBeverages,
getCustomers
};
