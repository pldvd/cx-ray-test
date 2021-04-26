const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello world!');
});

router.post('/add-post')

module.exports = router;
