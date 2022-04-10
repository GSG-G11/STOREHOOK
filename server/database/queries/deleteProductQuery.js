const connection = require('../config/connection');

const deleteProductQuery = (id) => {
    return connection.query({
        text:'DELETE FROM products where id = $1',
        values: [id],
    });
};


module.exports = deleteProductQuery