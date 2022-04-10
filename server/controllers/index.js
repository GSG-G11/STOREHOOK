const allProductsHandler = require('./products/getAllProducts');
const deleteProductHaneler = require('./products/deleteProduct');
const addProductHandler = require('./products/postProduct');
const productInfoHandler = require('./products/getSingleProduct');
const updateProductHandelar = require('./products/updateProduct');

module.exports ={
    allProductsHandler,
    deleteProductHaneler,
    addProductHandler,
    productInfoHandler,
    updateProductHandelar
}