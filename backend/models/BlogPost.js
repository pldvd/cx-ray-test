const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlogPostSchema = new Schema({
  title: {
    type: String,
    required: 'Post title is required.',
    validate: /\S+/
  },
  text: {
    type: String,
    required: 'Post text is required.',
    validate: /\S+/
  }
}, {
  toJSON: {
    virtuals: true
  }
});

BlogPostSchema.virtual('createdAt').get(function () {
  /*
  MongoDB ObjectIds contain information about the creation of the document
  */
  return this._id.getTimestamp();
});

module.exports = mongoose.model('blog-post', BlogPostSchema);