'use strict';
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  quantity: {
    metric: String,
    total_amount: Number,
    pkg_amount: Number
  }
});

const product = mongoose.model('product', productSchema);

module.exports = product;
