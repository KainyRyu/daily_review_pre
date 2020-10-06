const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const HttpError = require('./models/http-error');

const usersRoute = require('./routes/users-router');

const app = express();


app.use(bodyParser.json());

app.use('/api/dailyplan', usersRoute);


app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
})

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.mesage || 'An unknown error occurred!'});
})


mongoose
    .connect('mongodb+srv://kainy:testing123@cluster0.osruv.mongodb.net/dailyreview?retryWrites=true&w=majority')
    .then(() => {
        app.listen(5000);
    })
    .catch(err => {
        console.log(err);
    })