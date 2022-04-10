const router = require('express').Router();
const {allProductsHandler, addProductHandler, deleteProductHaneler, productInfoHandler} = require('../controllers');

router.get('/' , allProductsHandler)
router.get('/:id' , productInfoHandler)
router.post('/:id' , addProductHandler)
router.delete('/:id' , deleteProductHaneler)

module.exports = router