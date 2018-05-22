'use strict';
const Comment = require('./comments.js');
const History = require('./history');
const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
  social_security: Number,
  name: String,
  adress: {
    street_name: String,
    city: String,
    country: String,
    zipcode: Number
  },
  current_role: String,
  comments: [{
    date: {
      type: Date,
      default: (new Date())
    },
    text: {
      type: String,
      required: true
    },
    by: Number,
    employer_id: Number
  }],
  history: {
    type: Array,
    ref: History
  }
});

const employee = mongoose.model('Employee', employeeSchema);

module.exports = employee;
