const BlogPost = require('../models/BlogPost');

async function createPost(req, res) {
  const { title, text } = req.body;
  const newPost = await BlogPost.create({ title, text });

  res.json(newPost);
}

module.exports = createPost;