const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/freja", (req, res, next) => {
  res.send("FREJAS PAGE");
});

router.get('/Steffi', (req, res, next) => {
  res.render('steffis-page');
});

module.exports = router;
