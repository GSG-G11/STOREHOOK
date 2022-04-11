const { deleteProductQuery } = require('../../database/queries');

const deleteProductHandler = (req, res) => {
  deleteProductQuery(req.params.id)
    .then(() => res.json({ message: 'product deleted successfully', status: 200 }))
    .catch((err) => res.status(500).json({ message: err }));
};

module.exports = deleteProductHandler;
