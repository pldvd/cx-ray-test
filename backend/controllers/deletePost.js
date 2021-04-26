const BlogPost = require('../models/BlogPost');
const { validationResult } = require('express-validator');

async function deletePost(req, res, next) {
  
/*
  We check for validation errors returned by express-validator, if any is found, we pass it on to the error handler by using next(errors). Luckily this validation error has an 'errors' property just like mongoose, so the error handler works for both.
*/

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(errors);
  }

  const { id } = req.params;
  const deleted = await BlogPost.findByIdAndDelete(id);

  res.json(deleted);
}

module.exports = deletePost;
