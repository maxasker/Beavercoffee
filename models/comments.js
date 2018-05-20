'use strict';
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: (new Date())
  },
  text: String,
  by: Number,
  employer_id: Number
});

const comment = mongoose.model('comment', commentSchema);

module.exports = comment;
