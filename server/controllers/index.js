const allProductsHandler = require('./products/getAllProducts');
const deleteProductHandler = require('./products/deleteProduct');
const addProductHandler = require('./products/postProduct');
const productInfoHandler = require('./products/getSingleProduct');
const updateProductHandler = require('./products/updateProduct');

module.exports ={
    allProductsHandler,
    deleteProductHandler,
    addProductHandler,
    productInfoHandler,
    updateProductHandler
}