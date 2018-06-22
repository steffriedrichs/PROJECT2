const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/Steffi', (req, res, next) => {
  res.render('steffis-page');
});

module.exports = router;
