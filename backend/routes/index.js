const express = require('express');
const router = express.Router();
const { addPost, updatePost, deletePost } = require('../controllers');
const { catchAsyncErrors } = require('../middleware/errorHandlers');

router.get('/', (req, res) => {
  res.send('Hello world!');
});

router.post('/add-post', catchAsyncErrors(addPost));
router.put('/update-post/:id', catchAsyncErrors(updatePost));
router.delete('/delete-post/:id', catchAsyncErrors(deletePost));

module.exports = router;
