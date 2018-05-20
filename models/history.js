'use strict';
const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  role: String,
  start_date: {
    type: Date,
    default: (new Date())
  },
  end_date: Number, //Should be date, doing Number for testing purposes
  perc_fulltime: Number
});

const history = mongoose.model('history', historySchema);

module.exports = history;
