const { allProductsQuery } = require('../../database/queries');

const allProductsHandler = (req, res) => {
    allProductsQuery()
      .then((data) => res.status(200).json(data.rows))
      .catch((error) => res.status(500).json({ message: error }));
  };
  
  
  module.exports = allProductsHandler;