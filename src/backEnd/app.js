const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const userRoutes = require('./routes/user-route');

const app = express();


app.use('/api/user', userRoutes);

app.listen(5000);