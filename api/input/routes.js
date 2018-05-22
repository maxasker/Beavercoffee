'use strict';

const inputController = require('./inputController');
const employeeController = require('./employeeController.js');

function input (req, res) {
  return inputController.feedData(req.body)
  .then(function (result) {
    handleResponse(res, result);
  })
  .catch(function (err) {
    handleError(res, err);
  });
};

function employee(req, res) {
	return employeeController.postData(req.body)
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
	employee,
	input
};
