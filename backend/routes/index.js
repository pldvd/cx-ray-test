const express = require('express');
const router = express.Router();
const { addPost } = require('../controllers');
const { catchAsyncErrors } = require('../middleware/ErrorHandlers');

router.get('/', (req, res) => {
  res.send('Hello world!');
});

router.post('/add-post', catchAsyncErrors(addPost))

module.exports = router;
