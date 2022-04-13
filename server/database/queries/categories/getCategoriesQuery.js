const connection = require('../../config/connection');

const getCategoriesQuery = () => connection.query('select * from categories ');

module.exports = getCategoriesQuery;
