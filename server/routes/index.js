const router = require('express').Router();
const {allProductsQuery, addProductQuery, deleteProductQuery, getSingleProductQuery} = require('../database/queries');

router.get('/' , allProductsQuery)
router.get('/:id' , getSingleProductQuery)
router.post('/:id' , addProductQuery)
router.delete('/:id' , deleteProductQuery)

module.exports = router