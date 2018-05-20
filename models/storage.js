'use strict';
const mongoose = require('mongoose');
import Product from './products';

const storageSchema = new mongoose.Schema({
  products = [Product]
});

const storage = mongoose.model('storage', storageSchema);

module.exports = storage;
