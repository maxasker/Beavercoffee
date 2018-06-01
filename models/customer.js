'use strict';
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  barcode: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  social_security: Number,
  occupation: String,
  is_employee: {
    type: Boolean,
    required: true
  },
  country: String,
  beverages: {
    type: Number,
    default: 0
  },
  member_since: {
    type: Date,
    default: (new Date())
  },
  adress: {
    street_name: String,
    city: String,
    country: String,
    zipcode: Number
  }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
