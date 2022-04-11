const router = require('express').Router();
const {
  allProductsHandler,
  addProductHandler,
  deleteProductHandler,
  productInfoHandler,
  updateProductHandler,
} = require('../controllers');

router.get('/products', allProductsHandler);
router.post('/', addProductHandler);
router.get('/product/:id', productInfoHandler);
router.patch('/product/:id', updateProductHandler);
router.delete('/product/:id', deleteProductHandler);

module.exports = router;
