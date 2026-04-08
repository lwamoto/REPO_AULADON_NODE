const express = require('express');
const app = express();

require('./startup/db')(); // Conectar banco
require('./startup/router')(app); // Rodar o router

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
