'use strict';
const models = require('../../models');

function create (req, res) {
  const Storage = new models.Storage(req.body);
  Storage.save()
  .then(function (result) {
    handleResponse(res, result);
  })
  .catch(function (err) {
    handleError(res, err);
  });
}

function findAll (req, res) {
  models.Storage.find()
  .then(function (result) {
    handleResponse(res, result);
  })
  .catch(function (err) {
    handleError(res, err);
  });
}

function findOne (req, res) {
  models.Storage.findById(req.params.storeId)
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
};
