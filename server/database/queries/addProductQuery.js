const connection = require('../config/connection');

const addProductQuery = (id, name, description, image, category_id) => connection.query({
  text: 'insert into products (id, name, description, image, category_id) values ($1, $2, $3, $4, $5) returning *;',
  values: [id, name, description, image, category_id],
});

module.exports = addProductQuery;
