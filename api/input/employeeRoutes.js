'use strict';
const models = require('../../models');
const controller = require('./employeeController');

function create (req, res) {
	controller.create(req)
  .then(function (result) {
    handleResponse(res, result);
  })
  .catch(function (err) {
    handleError(res, err);
  });
}

function findAll(req, res) {
	controller.findAll()
	.then(function (result) {
		handleResponse(res, result);
	})
	.catch(function (err) {
		handleError(res, err);
	});
}

function findOne(req, res) {
	controller.findOne(req)
  .then(function (result) {
    handleResponse(res, result);
  })  
  .catch(function (err) {
    handleError(res, err);
  }); 
}

function update(req, res) {
	  controller.makeUpdate(req)
	  .then(function (result) {
			    handleResponse(res, result);
			  })
	  .catch(function (err) {
			    handleError(res, err);
			  });
}

function comment(req, res) {
	controller.makeComment(req)
	.then(function (result) {
				handleResponse(res, result);
		  })
	.catch(function (err) {
				handleError(res, err);
			});
}

function findEmpComments(req, res) {
  controller.getComments(req)
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
	findOne,
	update,
	comment,
	findEmpComments
} 
