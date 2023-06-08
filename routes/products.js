const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

//token generate
//const generateToken = require('../controllers/generateToken');
//const authenticate = require('../middlewares/authenticate');


//router.get('/token', generateToken.generateToken);
//router.post('/protected', authenticate);

//router.post('/products', productController.createProduct);

router.get('/products',  productController.getAllProducts);


module.exports = router;