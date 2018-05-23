'use strict';
const models = require('../../models');
//const inputController = require('./inputController');

function create (req, res) {
	req.body.history = {"role": req.body.current_role}
	const Employee = new models.Employee(req.body);
	Employee.save()
  .then(function (result) {
    handleResponse(res, result);
  })
  .catch(function (err) {
    handleError(res, err);
  });
}

function findAll(req, res) {
	models.Employee.find()
	.then(function (result) {
		handleResponse(res, result);
	})
	.catch(function (err) {
		handleError(res, err);
	});
}

function findOne(req, res) {
  models.Employee.findById(req.params.employeeId)
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
	findAll,
	findOne
} 
