const app = require('./app');

const PORT = app.get('port');

app.listen(PORT, () => console.log(`App listening on port http://localhost:${PORT}`));
