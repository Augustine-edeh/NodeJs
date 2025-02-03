const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();
const adminData = require("./admin");

const productControllers = require("../controllers/products");

router.get("/", productControllers.getProducts);

module.exports = router;
