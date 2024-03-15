const express = require('express');
const router = express.Router();
const productController = require("../controller/productController.js");

router.get("/product", productController.getALLProduct);

module.exports = router;
