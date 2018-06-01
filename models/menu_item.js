'use strict';
const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  price: {
    required: true,
    type: Number
  },
  ingredients: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    amount: Number,
    metric: String
  }]
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;
