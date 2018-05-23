'use strict';
const models = require('../../models');
//const inputController = require('./inputController');


//post new location
function postLocation (req, res) {
    const dataInput = new models.Location(data);
    dataInput.save()
        .then(function (result) {
    handleResponse(res, result);
  })
  .catch(function (err) {
    handleError(res, err);
  });
}

//find location
function findLocation (req, res) {
  models.Location.findById(req.params.locationId)
  .then(function (result) {
    handleResponse(res, result);
  })
  .catch(function (err) {
    handleError(res, err);
  });
}

// list locations
function listLocations (req, res) {
	models.Location.find()
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
  postLocation,
	findLocation,
    listLocations
}
