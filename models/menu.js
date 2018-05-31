'use strict';
const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  menu_items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'menu_item'
  }]
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
