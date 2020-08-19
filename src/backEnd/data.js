module.exports = function getEvent(props) {
    let events = [
        {time: '17', title: '' },
        {time: '18', title: '' }, 
        {time: '19', title: '' },
        {time: '20', title: '' },
        {time: '21', title: '' },
        {time: '22', title: '' }
    ]
    if (props) {
        return events.find(hour => hour.time === props);
    } else {
        return events;
    }
    
}   