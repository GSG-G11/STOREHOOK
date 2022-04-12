const allProductsHandler = require('./getAllProducts');
const deleteProductHandler = require('./deleteProduct');
const addProductHandler = require('./postProduct');
const productInfoHandler = require('./getSingleProduct');
const updateProductHandler = require('./updateProduct');

module.exports = {
  allProductsHandler,
  deleteProductHandler,
  addProductHandler,
  productInfoHandler,
  updateProductHandler,
};
