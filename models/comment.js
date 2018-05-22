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

<<<<<<< HEAD:models/comment.js
const Comment = mongoose.model('Comment', commentSchema);
=======
const comment = mongoose.model('Comment', commentSchema);
>>>>>>> origin/madde:models/comments.js

module.exports = Comment;
