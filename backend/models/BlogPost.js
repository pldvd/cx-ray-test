const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlogPostSchema = new Schema({
  title: {
    type: String,
    required: 'Post title is required.'
  },
  text: {
    type: String,
    required: 'Post text is required.'
  },
  likes: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('blog-post', BlogPostSchema);