const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.send('<form method="POST><input type="text"')
});
app.listen(5000);