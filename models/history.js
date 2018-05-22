'use strict';
const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  role: String,
  start_date: {
    type: Date,
    default: (new Date())
  },
  end_date: Number, // ändra till date efter test
  perc_fulltime: Number
});

const history = mongoose.model('history', historySchema);

module.exports = history;
