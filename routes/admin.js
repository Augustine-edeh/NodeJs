const path = require("path");

const express = require("express");

const rootDir = require("../../util/path");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));

  // res.sendFile(
  //   "<form action='/admin/add-product' method='POST'><input type='text' name='title' /><button type='submit'>Submit</button></form>"
  // );
});

// /admin/add-product => POST

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
