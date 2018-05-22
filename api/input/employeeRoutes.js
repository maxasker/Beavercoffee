'use strict';

const employeeController = require('./employeeController.js');

function create(req, res) {
  return employeeController.create(req.body)
  .then(function (result) { 
    handleResponse(res, result);
  })
  .catch(function (err) { 
    handleError(res, err);
  });
};

function getAll(req, res) {
  return employeeController.getAll(req.body)
  .then(function (result) {
    handleResponse(res, result);
  })
  .catch(function (err) {
    handleError(res, err);
  });
};

function update(req, res) {
  return employeeController.update(req)
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

module.exports  = {
	create,
	getAll,
	update
};
