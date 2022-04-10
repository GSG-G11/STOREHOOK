const connection = require('../config/connection');

const updateProductQuery = (id, name, description, image, category_id) => {
    return connection.query({
        text:`
            UPDATE products
            SET name = $1, description = $2, image = $3, category_id = $4
            WHERE id = $1 returning *;
        `,
        values: [id, name, description, image, category_id]
    });
};

module.exports = updateProductQuery