'use strict';
const mongoose = require('mongoose');
import Comments from './comments';
import History from './history';

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
  comments: [Comments],
  history: [History]
});

const employee = mongoose.model('employee', employeeSchema);

module.exports = employee;
