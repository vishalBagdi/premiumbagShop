const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { error: '' }); // even if there's no error
});

module.exports = router