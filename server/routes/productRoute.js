const express = require('express');
const router = express.Router();
const { createProduct, countProducts, findProduct, searchProduct, displayProduct, deleteProduct, productCategory, updateProduct } = require("../controllers/productController")
const { isAuthenticated, isAdmin, isAuthenticatedReqId } = require("../middleware/auth");


router.post('/product/create/:id', isAuthenticatedReqId, createProduct);
router.get('/product/find/:id', findProduct);
router.get('/product/search/:id', searchProduct);
router.get('/product/all/:id', displayProduct);
router.get('/product/countProducts', countProducts);
router.delete('/product/delete/:id', deleteProduct);
router.put('/products/update/:id', isAuthenticated, isAdmin, updateProduct);
router.get('/product/categories', productCategory);





module.exports = router;