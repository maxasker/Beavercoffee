'use strict';
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  adress: {
    street: String,
    zipcode: Number,
    city: String,
    country: String
  }
});

const location = mongoose.model('locationData', locationSchema);

module.exports = location;
