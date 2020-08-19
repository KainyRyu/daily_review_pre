const express = require('express');
const app = express();
const port = 3001;

const timeslots = require('./data');

app.get('/', (req, res) => res.send('Hi'));
app.get('/rest/timeslots/:time?', (req, res) => {
    let timeslot = timeslots();
    if (req.params.time) {
        let hour = timeslot.find(hour => hour.time === req.params.time)
        res.send(hour)
    } else {
        res.send(timeslot)
    }
});

// app.use((req, res, next) => {
//     res.send('<form method="POST><input type="text" />')
// });
app.listen(port);