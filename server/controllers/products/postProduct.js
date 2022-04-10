const { addProductQuery } = require('../../database/queries');

const addProductHandler = (req, res) => {
  const { id, name, description, image } = req.body;
  addProductQuery(id, name, description, image, req.params.id)
    .then((data) => res.json({ product: data.rows[0] }))
    .catch((err) => res.status(500).json({ massage: err }))
};

module.exports = addProductHandler;
