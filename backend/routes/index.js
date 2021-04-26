const express = require('express');
const router = express.Router();
const { addPost } = require('../controllers');
const { catchAsyncErrors } = require('../middleware/errorHandlers');

router.get('/', (req, res) => {
  res.send('Hello world!');
});

router.post('/add-post', catchAsyncErrors(addPost))

module.exports = router;
