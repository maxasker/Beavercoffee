'use strict';

const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    barcode: Number,
    name: String,
  social_security: Number,
    occupation: String,
    is_employee: Boolean,
    country: String,
    beverages: Number,
    member_since: Date,
  adress: {
    street_name: String,
    city: String,
    country: String,
    zipcode: Number
  },
});

const customer = mongoose.model('customer', customerSchema);

module.exports = customer;
