'use strict';
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
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
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
