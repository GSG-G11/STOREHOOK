const router = require('express').Router();
const productRoutes = require('./productRoutes');

router.use('/', productRoutes);

module.exports = router;
