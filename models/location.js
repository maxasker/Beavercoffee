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

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
