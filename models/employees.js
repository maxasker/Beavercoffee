'use strict';
const Comment = require('./comments.js');
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
  current_role: String,
  comments: {
    type: Array,
    ref: Comment,
    required: false
  },
  history: {
    type: Array,
    ref: History
  }
});

const employee = mongoose.model('employee', employeeSchema);

module.exports = employee;
