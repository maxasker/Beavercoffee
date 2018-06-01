'use strict';

const menuController = require('../controllers/menu.controller');

function create (req, res) {
  return menuController.create(req.body)
  .then(function (result) {
    handleResponse(res, result);
  })
  .catch(function (err) {
    handleError(res, err);
  });
}

function addMenuItem (req, res) {
  return menuController.addMenuItem(req.body, req.params.storeId)
  .then(function (result) {
    handleResponse(res, result);
  })
  .catch(function (err) {
    handleError(res, err);
  });
}

function getMenuItems (req, res) {
  return menuController.getAllMenuItems(req.params.storeId)
  .then(function (result) {
    handleResponse(res, result);
  })
  .catch(function (err) {
    handleError(res, err);
  });
}

function findAll (req, res) {
  return menuController.findAll()
  .then(function (result) {
    handleResponse(res, result);
  })
  .catch(function (err) {
    handleError(res, err);
  });
}

function findOne (req, res) {
  return menuController.findOne(req.params.storeId)
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
  create,
  findAll,
  findOne,
  addMenuItem,
  getMenuItems
};
