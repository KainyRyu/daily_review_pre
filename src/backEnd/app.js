const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const HttpError = require('./models/http-error');

const usersRoute = require('./routes/users-router');
const plansRoute = require('./routes/plans-router');

const app = express();


app.use(bodyParser.json());

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*'); 
//     //it allows any domain to send requests 
//     res.setHeader(
//         'Access-Control-Allow-Headers', 
//         'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//     ); //which hdeaders these requests sent by the browser may have
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
//         //It controls which HTTP emthods may be used on the frontend

//     next();
// });

app.use('/api/users', usersRoute);

app.use('/api/dailyplan', plansRoute);


app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
});

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || 'An unknown error occurred!'});
});


mongoose
    .connect('mongodb+srv://kainy:testing123@cluster0.osruv.mongodb.net/dailyreview?retryWrites=true&w=majority')
    .then(() => {
        app.listen(5000);
    })
    .catch(err => {
        console.log(err);
    })

