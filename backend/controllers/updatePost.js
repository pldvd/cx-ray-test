const BlogPost = require('../models/BlogPost');
const { validationResult } = require('express-validator');

async function updatePost(req, res, next) {

  /*
    We check for validation errors returned by express-validator, if any is found, we pass it on to the error handler by using next(errors). Luckily this validation error has an 'errors' property just like mongoose, so the error handler works for both.
  */

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(errors);
  }

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