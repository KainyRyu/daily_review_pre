import React, { useState } from 'react';
import { KeyboardDatePicker } from  "@material-ui/pickers"
import timeSlot from "./TimeSlot"
import './editplan.css';

export default function EditPlan(props) {
    const [newEvent, setNewEvent] = useState({
        title: '',
        starts: 0,
        ends: 0,
        memo: ''
    });
    const [due,setDue] = useState(0);

    const getEvent = e => setNewEvent(e.target.value)
    //on DailyPlan: mapping timeSlot component
    //EditPlan: push the item if time === index or timeSlot.time ? timeSlot.title : null
    const getStarts = e => setNewEvent({... newEvent, title: e.target.value})
    const getEnds = e => setNewEvent({... newEvent, ends: e.target.value})
    const getMemo = e => setNewEvent({... newEvent, memo: e.target.value})
    return (
        <form id="edit-form">
            <div className="input-wrapper">
                <input 
                    id="new-event-input"
                    type="text" 
                    placeholder="New Event" 
                    onChange={getEvent} 
                    //if the time's title is empty => "" : timeslot[time].title
                    value={newEvent.title}
                />
            </div>
            <div className="input-wrapper">
                <label>Starts </label>
                <select className="edit-plan-time">
                    {
                        timeSlot().map((hour, index) => {
                            return <option key={index}>{hour.time}</option>
                        })
                    }
                </select>
                {/* <input type="time" onChange={getStarts} value={starts}/> */}
            </div>
            <div className="input-wrapper">
                <label>Ends </label>
                <select className="edit-plan-time">
                    {
                        timeSlot().map((hour, index) => {
                            return <option key={index}>{hour.time}</option>
                        })
                    }
                </select>
                {/* <input type="time" onChange={getEnds} value={ends}/> */}
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
            </div> */}
            <div>
                <textarea placeholder="Notes" rows="4" onChange={getMemo}>
                </textarea>
            </div>
            <input type="submit" />
        </form>
    )
}

