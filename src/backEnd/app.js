const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = require('./route');

app.use(router)

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
