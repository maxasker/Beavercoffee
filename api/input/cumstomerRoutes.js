'use strict';

const customerController = require('./customerController');


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

//get customer
function getCustomer (req, res) {
     return customerController.getData(req.params.name)
  .then(function (result) {
    handleResponse(res, result);
  })
  .catch(function (err) {
    handleError(res, err);
  });
};

// update customer (OBS ALL DATA)
function updateCustomer (req, res) {
    return customerController.updateData(req.params.name, req.body)
  .then(function (result) {
    handleResponse(res, result);
  })
  .catch(function (err) {
    handleError(res, err);
  });
};

// update beverages
function updateBeverages (req, res) {
    return customerController.updateBeverages(req.params.name, req.body)
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
    updateBeverages
};
