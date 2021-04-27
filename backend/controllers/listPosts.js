const BlogPost = require('../models/BlogPost');

async function listPosts(req, res) {
  const posts = await BlogPost.find({});

  res.json(posts);
}

module.exports = listPosts;