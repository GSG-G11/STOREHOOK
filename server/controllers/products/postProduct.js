const { addProductQuery } = require('../../database/queries');
const { productValidation } = require('../../utils');
const { customError } = require('../../errors');

const addProductHandler = (req, res, next) => {
  const {
    name,
    description,
    image,
    price,
    categoryId,
  } = req.body;

  productValidation
    .validateAsync(req.body)
    .then(() => addProductQuery(name, description, image, price, categoryId))
    .then((data) => res.json({
      message: 'Product added successfully',
      status: 201,
      product: data.rows[0],
    }))
    .catch((err) => err.details ? next(customError(err.details[0].message, 400)) : next(err) );
};

module.exports = addProductHandler;
