const express = require('express');
const app = express();
const Joi = require('joi');

app.use(express.json());


// const timeslots = require('./data');
let events = [
    {time: '00', title: 'Coding'},
    {time: '01', title: 'Coding'},
    {time: '02', title: 'Sleeping'},
    {time: '03', title: 'Sleeping'},
    {time: '04', title: ''},
    {time: '05', title: ''}
]


app.get('/', (req, res) => res.send('Hi'));
app.get('/rest/timeslots', (req, res) => {
    res.send(events)
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
    const schema = Joi.object({
        title: Joi.string().min(3).required()
    });

    const validation = schema.validate(req.body);
    res.send(validation);
    // !req.body.title || events.find(event => event.title === req.body.title)    'Title is required and shouldn\'t be the the same'
    if(validation.error) {
        res.status(404).send(validation.error)
        return;
    }
    const timeslot = {
        time: events.length + 1,
        // time: req.body.timeslots,
        title: req.body.title
    };
    events.push(timeslot);
    res.send(timeslot);
})

// app.use((req, res, next) => {
//     res.send('<form method="POST><input type="text" />')
// });
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));