const express = require('express');
const router = express.Router();
const { addPost, updatePost, deletePost, listPosts } = require('../controllers');
const { catchAsyncErrors } = require('../middleware/errorHandlers');
const { idValidator } = require('../middleware/validators');

router.get('/list-posts',
  catchAsyncErrors(listPosts)
);

router.post('/add-post',
  catchAsyncErrors(addPost)
);

router.put('/update-post/:id',
  idValidator(),
  catchAsyncErrors(updatePost)
);

router.delete('/delete-post/:id',
  idValidator(),
  catchAsyncErrors(deletePost)
);

module.exports = router;
