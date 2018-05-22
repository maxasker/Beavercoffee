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
  current_role: String,
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  history: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'History'
  }]
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
