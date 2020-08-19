const express = require('express');
const app = express();

app.use(express.json());


const timeslots = require('./data');

app.get('/', (req, res) => res.send('Hi'));
app.get('/rest/timeslots/:time?', (req, res) => {
    res.send(timeslots(req.params.time))
    // let timeslot = timeslots();
    // if (req.params.time) {
    //     let hour = timeslot.find(hour => hour.time === req.params.time)
    //     res.send(hour)
    // } else {
    //     res.send(timeslot)
    // }
});

app.post('/api/timeslots', (req, res) => {
    // const timeslotIndex = timeslots.length - 1
    const timeslot = {
        time: timeslots.length + 1,
        // time: req.body.timeslots,
        name: req.body.name
    }
    timeslots.push(timeslot);
    res.send(timeslot);
})

// app.use((req, res, next) => {
//     res.send('<form method="POST><input type="text" />')
// });
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));