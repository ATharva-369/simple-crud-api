const express = require("express");
const router = express.Router();
const Product = require('../models/product.model.js')
const productController = require("../controllers/product.controller.js");

router.get('/',productController.getProducts);
router.get("/:id",productController.getProduct)
router.post("/",productController.createProduct)
router.put("/:id",productController.updateProduct)
router.delete("/:id",productController.deleteProduct)


module.exports = router