const express = require('express');
const app = express();
const port = 3001;

const getData = require('./data');

app.get('/', (req, res) => res.send('Hi'));
app.get('/rest/fruits', (req, res) => {
    res.send(getData())
});
// app.use((req, res, next) => {
//     res.send('<form method="POST><input type="text" />')
// });
app.listen(port);