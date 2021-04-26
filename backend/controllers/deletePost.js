const BlogPost = require('../models/BlogPost');

async function deletePost(req, res) {
  const { id } = req.params;
  const deleted = await BlogPost.findByIdAndDelete(id);

  res.json(deleted);
}

module.exports = deletePost;
