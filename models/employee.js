'use strict';
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
  current_role: {
    type: String,
    required: true
  },
  comments: [{
    date: {
      type: Date,
      default: (new Date())
    },
    text: {
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee'
    }
  }],
  history: [{
    role: String,
    start_date: {
      type: Date,
      default: (new Date())
    },
    end_date: {
      type: Date,
      required: false
    },
    perc_fulltime: Number
  }]
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
