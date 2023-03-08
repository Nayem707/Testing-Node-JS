const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  getAllProductsStatic,
} = require("../controller/products");

router.route("/products").get(getAllProducts).post(createProduct);
router.route("products/:id").get(getAllProductsStatic);

module.exports = router;
