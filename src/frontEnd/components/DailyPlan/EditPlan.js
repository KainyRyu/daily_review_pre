import React, { useState } from 'react';
import { KeyboardDatePicker } from  "@material-ui/pickers"
import timeSlot from "./TimeSlot"
import './editplan.css';

export default function EditPlan(props) {
    const [newEvent, setNewEvent] = useState('');
    const [starts,setStarts] = useState(0);
    const [ends,setEnds] = useState(0);
    const [due,setDue] = useState(0);
    const [memo, setMemo] = useState('')

    const getEvent = e => setNewEvent(e.target.value)
    //on DailyPlan: mapping timeSlot component
    //EditPlan: push the item if time === index or timeSlot.time ? timeSlot.title : null
    const getStarts = e => setStarts(e.target.value)
    const getEnds = e => setEnds(e.target.value)
    const getMemo = e => setMemo(e.target.value)
    return (
        <form id="edit-form">
            <div className="input-wrapper">
                <input 
                    id="new-event-input"
                    type="text" 
                    placeholder="New Event" 
                    onChange={getEvent} 
                    value={newEvent}
                />
            </div>
            <div className="input-wrapper">
                <label>Starts </label>
                <select>
                    {
                        timeSlot().map(hour => {
                            return <option key="hour">{hour.time}</option>
                        })
                    }
                </select>
                {/* <input type="time" onChange={getStarts} value={starts}/> */}
            </div>
            <div className="input-wrapper">
                <label>Ends </label>
                <input type="time" onChange={getEnds} value={ends}/>
            </div>
            {/* <div className="input-wrapper">
                Repeat
            </div> */}
            <div className="input-wrapper">
                <span>Alert</span><span>></span>
            </div>
            <div className="input-wrapper">
                <h3 style={{margin: 0}}>BOLD</h3>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
            </div>
            <div>
                <textarea placeholder="Notes" rows="4" onChange={getMemo}>
                </textarea>
            </div>
            <input type="submit" />
        </form>
    )
}

