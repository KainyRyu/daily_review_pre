import React, { useState } from 'react';
import './editplan.css';

export default function EditPlan(props) {
    const [newEvent, setNewEvent] = useState('');
    const [starts,setStarts] = useState(0);
    const [ends,setEnds] = useState(0);
    const [due,setDue] = useState(0);
    const [memo, setMemo] = useState('')

    const getEvent = e => setNewEvent(e.target.value)
    const getStarts = e => setStarts(e.target.value)
    const getEnds = e => setEnds(e.target.value)
    const getMemo = e => setMemo(e.target.value)
    return (
        <form id="edit-form">
            <div>
                <input 
                    type="text" 
                    placeholder="New Event" 
                    onChange={getEvent} 
                    value={newEvent}
                />
            </div>
            <div>
                <label>Starts </label>
                <input type="time" onChange={getStarts} value={starts}/>
            </div>
            <div>
                <label>Ends </label>
                <input type="time" onChange={getEnds} value={ends}/>
            </div>
            <div>
                Repeat
            </div>
            <div>
                Alert
            </div>
            <div>
                <h3 style={{margin: 0}}>BOLD</h3>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
            </div>
            <div>
                <textarea placeholder="Notes" rows="4" onChange={getMemo}>
                    {memo}
                </textarea>
            </div>
            <input type="submit" />
        </form>
    )
}
