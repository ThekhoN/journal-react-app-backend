const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
  updated: {
    type: Date,
    default: Date.now
  },
  text: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  tag: {
    type: Array
  }
});

const Entry = mongoose.model('entry', entrySchema);
module.exports = Entry;
