const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId
  },
  text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('post', PostSchema);