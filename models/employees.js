'use strict';
const Comment = require('./comments');
const History = require('./history');
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  social_security: Number,
  name: String,
  adress: {
    street_name: String,
    city: String,
    country: String,
    zipcode: Number
  },
  current_role: String
  // history: [History],
  // comments: [Comment]
});

const employee = mongoose.model('employee', employeeSchema);

module.exports = employee;
