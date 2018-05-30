'use strict';

const storeController = require('../controllers/store.Controller');
const express = require('express');

function createStore (req, res) {
  return storeController.create(req.body)
  .then(function (result) {
    handleResponse(res, result);
  })
  .catch(function (err) {
    handleError(res, err);
  });
}

function findAllStores (req, res) {
  return storeController.findAll()
  .then(function (result) {
    console.log(result);
    handleResponse(res, result);
  })
  .catch(function (err) {
    handleError(res, err);
  });
}

function findOneStore (req, res) {
  return storeController.findOne(req.params.storeId)
  .then(function (result) {
    handleResponse(result);
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
  return res.send(result);
};

module.exports = {
  createStore,
  findAllStores,
  findOneStore
};
