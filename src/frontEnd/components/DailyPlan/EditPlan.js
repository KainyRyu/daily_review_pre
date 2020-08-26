import React, { useState } from 'react';
import timeSlots from "./TimeSlots"
import './editplan.css';

export default function EditPlan(props) {
    const timeslots = timeSlots()
    const [newEvent, setNewEvent] = useState({
        title: '',
        starts: 0,
        ends: 0,
        // mute: false,
        // bold: false,
        // memo: ''
    });

    const getEvent = e => setNewEvent({ ...newEvent, title: e.target.value })
    const getStarts = e => setNewEvent({ ...newEvent, starts: e.target.value})
    const getEnds = e => setNewEvent({ ...newEvent, ends: e.target.value })
    // const getMemo = e => setNewEvent({... newEvent, memo: e.target.value})
        
    // const addTitle = () => {
    //     const betweenStartsEnd = timeslots
    //         .filter(timeslot => newEvent.starts <= timeslot.time && newEvent.ends >= timeslot.time)
    //     // const addTitle = betweenStartsEnd.map
    //     return betweenStartsEnd
    //         .every(timeslot => timeslot.title === '') ? 
    //         betweenStartsEnd.map(timeslot => timeslot = { ...timeslot, title: newEvent.title }) : 
    //         betweenStartsEnd          
    // }

    function addNewEvent() {
        if (!hasNoSchedule(newEvent.starts, newEvent.ends)) {
            return; 
        }

        for (let i = parseInt(newEvent.starts); i <= parseInt(newEvent.ends); i++) {
            const timeslot = timeslots[i];
            if (timeslot.time >= newEvent.starts && timeslot.time <= newEvent.ends) {
                timeslot.title = newEvent.title;
                // setNewEvent({title: '', starts: 0, ends: 0});
            }
        }
    
    }

    function hasNoSchedule(start, end) {
        for (let i = parseInt(start); i <= parseInt(end); i++) {
            const timeslot = timeslots[i];
            if (timeslot.title !== "") {
                setNewEvent({...newEvent, starts: 0, ends: 0})
                alert(`There is an event between ${start} - ${end}`);
                break;
            }
        }
        return true;
    }

    const submitHandler = (e) => {
        e.preventDefault()
        addNewEvent()
        console.log(`newEvent from submitHandler ${JSON.stringify(newEvent)}`)
        console.log(`timeSlot array from submitHandler: ${JSON.stringify(timeslots)}`)
        // setNewEvent({title: '', starts: 0, ends: 0})
    }

    return (
        <form id="edit-form" >
            <div className="input-wrapper">
                <input 
                    id="new-event-input"
                    type="text" 
                    placeholder="New Event" 
                    onChange={getEvent} 
                    //if the time's title is empty => "" : timeslots[time].title
                    value={newEvent.title}
                />
            </div>
            <div className="input-wrapper">
                <label>Starts </label>
                <select 
                    className="edit-plan-time"
                    onChange={getStarts}
                    value={newEvent.starts}
                >
                    {
                        timeslots.map((hour, index) => {
                            return <option key={index}>{hour.time}</option>
                        })
                    }
                </select>
            </div>
            <div className="input-wrapper">
                <label>Ends </label>
                <select 
                    className="edit-plan-time"
                    onChange={getEnds}
                    value={newEvent.ends}
                >     
                    {
                        timeslots.map((hour, index) => {
                            return <option key={index}>{hour.time}</option>
                        })
                    }
                </select>
            </div>
            {/* <div className="input-wrapper">
                Repeat
            </div> */}
            <div className="input-wrapper">
                <span>Alert</span><span>></span>
            </div>
            {/* <div className="input-wrapper">
                <h3 style={{margin: 0}}>BOLD</h3>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
            </div> 
            <div>
                <textarea placeholder="Notes" rows="4" onChange={getMemo}>
                </textarea>
            </div> */}
            <input type="submit" onClick={submitHandler} />
        </form>
    )
}

