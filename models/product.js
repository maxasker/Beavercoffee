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

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
