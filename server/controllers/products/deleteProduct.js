const { deleteProductQuery } = require('../../database/queries');

const deleteProductHaneler = (req, res) => {
    deleteProductQuery(req.params.id)
    .then(() => res.json({ massage: 'product was deleted' }))
    .catch((err) => res.status(500).json({ massage: err }));
};

module.exports = deleteProductHaneler;