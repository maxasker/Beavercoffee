'use strict';
const mongoose = require('mongoose');
const Products = require('./products.js')

const storageSchema = new mongoose.Schema({
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Products'}]
});

const storage = mongoose.model('storage', storageSchema);

module.exports = storage;
