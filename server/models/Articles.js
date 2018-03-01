const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const articleSchema = new Schema({
  title:  String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  content: String,
  image: String,
  category: String
},{
  timestamps: true
});

const Article = mongoose.model('Articles', articleSchema);

module.exports = Article