const express = require('express');
const bodyParser = require('body-parser');
const mongoPractice = require('./mongoose');

const app = express();

app.use(bodyParser.json());

app.post('/users', mongoPractice.createUser);

app.get('/users', mongoPractice.getUsers);

app.listen(4000);



// const express = require('express');
// const bodyParser = require('body-parser');

// const HttpError = require('../../models/http-error');

// const userRoutes = require('./routes/user-route');

// const userTestingRoute = require('./routes/routeTesting');//

// const app = express();

// app.use(bodyParser.json());

// app.use('/api/user', userRoutes);

// app.use('/api/users', userTestingRoute);//

// app.use((req, res, next) => {
//     const error = new HttpError('Could not find this route.', 404);
//     throw error;
// });

// app.use((error, req, res, next) => {
//     if (res.headerSent) {
//         return next(error);
//     }
//     res.status(error.code || 500);
//     res.json({message: error.message || 'An unknown error occurred!'});
// })

// app.listen(5000);