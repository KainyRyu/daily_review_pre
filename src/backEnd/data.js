module.exports = function getEvent(props) {
    let events = [
        {time: '00', title: '', review: '' },
        {time: '01', title: '', review: '' },
        {time: '02', title: '', review: 'Sleep' },
        {time: '03', title: '', review: 'Sleep' },
        {time: '04', title: '', review: 'Sleep' },
        {time: '05', title: '', review: '' }
    ]
    if (props) {
        return events.find(hour => hour.time === props);
    } else {
        return events;
    }
    
}   