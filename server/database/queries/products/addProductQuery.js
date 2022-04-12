const connection = require('../../config/connection');

const addProductQuery = (name, description, image, price, category) => connection.query({
  text: 'insert into products (name, description, image, price, category_id) values ($1, $2, $3, $4, $5) returning *;',
  values: [name, description, image, price, category],
});

module.exports = addProductQuery;
