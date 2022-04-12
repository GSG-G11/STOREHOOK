const {
  allProductsHandler,
  deleteProductHandler,
  addProductHandler,
  productInfoHandler,
  updateProductHandler,
} = require('./products');
const { getCategories } = require('./categories');

module.exports = {
  allProductsHandler,
  deleteProductHandler,
  addProductHandler,
  productInfoHandler,
  updateProductHandler,
  getCategories,
};
