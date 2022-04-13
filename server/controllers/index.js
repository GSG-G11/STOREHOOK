const {
  allProductsHandler,
  deleteProductHandler,
  addProductHandler,
  productInfoHandler,
  updateProductHandler,
} = require('./products');
const { getCategories } = require('./categories');
const { serverError, clientError } = require('./error');

module.exports = {
  allProductsHandler,
  deleteProductHandler,
  addProductHandler,
  productInfoHandler,
  updateProductHandler,
  getCategories,
  serverError, 
  clientError,
};
