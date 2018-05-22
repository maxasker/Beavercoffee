'use strict';
const mongoose = require('mongoose');

const storageSchema = new mongoose.Schema({
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Products'}]
});

const Storage = mongoose.model('Storage', storageSchema);

module.exports = Storage;
