/* eslint-disable linebreak-style */
const { updateProductQuery } = require('../../database/queries');

const updateProductHandler = (req, res) => {
  const { id } = req.params;
  const {
    name, description, image, categoryId, price,
  } = req.body;

  updateProductQuery(id, name, description, image, categoryId, price)
    .then((data) => {
      res.status(201).json({
        message: 'Product updated successfully!',
        status: 201,
        data: data.rows[0],
      });
    }).catch((err) => res.json({ message: 'oops! try Again!', error: err }));
};

module.exports = updateProductHandler;
