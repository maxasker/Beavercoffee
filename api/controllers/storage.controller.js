'use strict';
const models = require('../../models');

function create () {
  const Storage = new models.Storage();
  return Storage.save();
}

function findAll () {
  return models.Storage.find();
}

function findOne (id) {
  return models.Storage.findById(id);
}

module.exports = {
  create,
  findAll,
  findOne
};
