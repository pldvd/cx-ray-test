const BlogPost = require('../models/BlogPost');

async function updatePost(req, res) {
  const { id } = req.params;
  const { title, text } = req.body;
  const post = { title, text };

  /*
  findByIdAndUpdate returns the original document by default, so we need to add a third param: {new: true} to get the updated document
  */

  const updated = await BlogPost.findByIdAndUpdate(id, post, { new: true });

  res.json(updated);
}

module.exports = updatePost;