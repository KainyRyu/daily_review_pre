const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./route');

const app = express();

app.use('/api/places', placesRoutes);

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || 'An unknown Error occurred!'});
})

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
