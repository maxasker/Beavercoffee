'use strict';

const mongoose = require('mongoose');

//history:
const mongooseHistory = require('mongoose-history');

const customerSchema = new mongoose.Schema({
    barcode: Number,
    name: String,
  social_security: Number,
    occupation: String,
    is_employee: Boolean,
    country: String,
    beverages: Number,
    member_since: Date,
  address: {
    street_name: String,
    city: String,
    country: String,
    zipcode: Number
  },
});

const customer = mongoose.model('customer', customerSchema);

customer.plugin(mongooseHistory);

module.exports = customer;
