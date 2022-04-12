const connection = require('../../config/connection');

const updateProductQuery = (id, name, description, image, categoryId, price) => connection.query({
  text: `
      UPDATE products
      SET name = $1, description = $2, image = $3, category_id = $4, price = $5
      WHERE id = $6 returning *;
  `,
  values: [name, description, image, categoryId, price, id],
});

module.exports = updateProductQuery;
