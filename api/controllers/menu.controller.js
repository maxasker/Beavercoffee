'use strict';
const models = require('../../models');

function create () {
  const Menu = new models.Menu();
  return Menu.save();
}

function findAll () {
  return models.Menu.find();
}

function findOne (id) {
  return models.Menu.findById(id);
}

module.exports = {
  create,
  findAll,
  findOne
};
