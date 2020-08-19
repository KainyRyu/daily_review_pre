module.exports = function getEvent(props) {
    let events = [
        {time: '17', title: '', review: '' },
        {time: '18', title: '', review: '' }, 
        {time: '19', title: '', review: '' },
        {time: '20', title: '', review: '' },
        {time: '21', title: '', review: '' },
        {time: '22', title: '', review: '' }
    ]
    if (props) {
        return events.find(hour => hour.time === props);
    } else {
        return events;
    }
    
}   