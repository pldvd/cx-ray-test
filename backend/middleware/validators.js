const { param } = require('express-validator');
const BlogPost = require('../models/BlogPost');

const idValidator = () => {
  return param('id')
    .isMongoId()
    .custom(value => {
      return BlogPost.exists({ _id: value })
        .then(value => {
          /*
          We must return a rejected promise if the value is not found
          https://express-validator.github.io/docs/custom-validators-sanitizers.html
          */
          if (!value) return Promise.reject('Blog post does not exist');
        });
    })
};

module.exports = { idValidator };