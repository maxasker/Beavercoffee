'use strict';
const models = require('../../models');
const controller = require('../controllers/reportController.js');


function get(req, res) {
	controller.employees(req.body)
	.then(function(results) {
		handleResponse(res, results);
	})
	.catch(function (err) {
		handleError(res, err);
	});
}


function findOne (){

}


function deleteOne(){

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
	get
}
