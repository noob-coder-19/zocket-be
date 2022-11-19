const express = require("express");
const router = express.Router();

const {
  getAllProducts: handleProduct,
  createProduct,
} = require("../controllers/ProductController");

router.get("/", handleProduct);
router.post("/", createProduct);

module.exports = router;
