'use strict';

const customerController = require('./customerController');

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
    getCustomer
};
