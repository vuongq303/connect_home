var express = require("express");
const { join } = require("path");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/login", function (req, res) {
  res.sendFile(join(__dirname, "..", "public", "pages", "login.html"));
});

router.get("/main", function (req, res) {
  res.sendFile(join(__dirname, "..", "public", "pages", "main.html"));
});

module.exports = router;
