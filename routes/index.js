const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/freja", (req, res, next) => {
  res.send("FREJAS PAGE");
});

module.exports = router;
