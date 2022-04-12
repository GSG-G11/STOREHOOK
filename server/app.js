const path = require('path');
require('dotenv').config();
const express = require('express');
const router = require('./routes');
const { clientError, serverError } = require('./errors');

const app = express();

app.set('port', process.env.PORT || 3000);
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v1', router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '..', 'client', 'build', 'index.html')
    );
  });
}

router.use(clientError);
router.use(serverError);

module.exports = app;
