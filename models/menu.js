'use strict';
const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  menu_item: String,
  price: Number,
  ingredients: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'products'
    },
    amount: Number,
    metric: String
  }]
});

const menu = mongoose.model('menuItem', menuSchema);

module.exports = menu;
