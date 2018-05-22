'use strict';
const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  menu_item: String,
  price: Number,
  ingredients: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    amount: Number,
    metric: String
  }]
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
