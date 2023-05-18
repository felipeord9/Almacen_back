const express = require("express");
const ProductController = require("../../controllers/productController");

const router = express.Router();

router
  .get("/", ProductController.findAllProducts)
  .get("/:id", ProductController.findOneProduct)
  .post("/", ProductController.createProduct);

module.exports = router;
