'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: Number
});

const menu = mongoose.model('menuItem', menuSchema);

module.exports = menu;
