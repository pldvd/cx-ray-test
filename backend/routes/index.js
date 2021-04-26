const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

router.get('/', (req, res) => {
  res.send('Hello world!');
});

router.post('/add-post', controllers.addPost)

module.exports = router;
