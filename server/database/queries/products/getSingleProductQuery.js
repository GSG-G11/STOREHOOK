const connection = require('../../config/connection');

const getSingleProductQuery = (id) => connection.query({
  text: 'select * from products where id = $1;',
  values: [id],
});

module.exports = getSingleProductQuery;