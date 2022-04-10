/* eslint-disable linebreak-style */
const { updateProductQuery } = require('../../database/queries');

const updateProductHandelar = (req, res) => {
  const { id } = req.params;
  const {
    name, description, image, category_id
  } = req.body;

  updateProductQuery(id, name, description, image, category_id)
    .then((data) => {
      res.status(201).json({
        message: 'Your Product was updated successflly !',
        post: data.rows,
      });
    }).catch((err) => res.json({ message: 'oops! try Again!', error: err }));
};

module.exports = updateProductHandelar;
