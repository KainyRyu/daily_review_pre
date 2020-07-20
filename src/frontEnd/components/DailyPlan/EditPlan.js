import React, { useState } from 'react';
import './editplan.css';

export default function EditPlan(props) {
    const [title, setTitle] = useState('');
    const [startTime,setStartTime] = useState(0);
    const [endTime,setEndTime] = useState(0);
    const [due,setDue] = useState(0);
    const [priority, setPriority] = useState('');
    const [memo, setMemo] = useState('')


    return (
        <form id="edit-form">
            <div>
                <input type="text" placeholder="New Event" onChange={(e) => setTitle(e.target.value)} value={title}/>
            </div>
            <div>
                <label>Start time </label><input type="time" onChange={(e) => setStartTime(e.target.value)} value={startTime}/>
            </div>
            <div>
                <label>End time </label><input type="time" onChange={(e) => setEndTime(e.target.value)} value={endTime}/>
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
                {/* <select>
                    <option value={priority}>{priority}</option>
                    <option value={priority}>{priority}</option>
                    <option value={priority}>{priority}</option>
                </select> */}
            </div>
            <div><textarea placeholder="Notes" rows="4">{memo}</textarea></div>
            <input type="submit" />
        </form>
    )
}
//select > if number === time[i] > add in the object