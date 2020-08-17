import React, { useState } from 'react';
import { KeyboardDatePicker } from  "@material-ui/pickers"
import timeSlots from "./TimeSlots"
import './editplan.css';

export default function EditPlan(props) {
    const [newEvent, setNewEvent] = useState({
        title: '',
        starts: 0,
        ends: 0,
        // mute: false,
        // bold: false,
        // memo: ''
    });



    const getEvent = e => setNewEvent(e.target.value)
    //on DailyPlan: mapping timeSlots component
    //EditPlan: push the item if time === index or timeSlots.time ? timeSlots.title : null
    const getStarts = e => setNewEvent({ ... newEvent, starts: e.target.value })
    const getEnds = e => setNewEvent({ ... newEvent, ends: e.target.value })
    // const getMemo = e => setNewEvent({... newEvent, memo: e.target.value})
        
    const addToTimeslot = () => {
        return timeSlots().map((timeSlot, index) => (
            index < newEvent.starts &&
            index > newEvent.ends ?
                false : 
                timeSlot.title !== '' ?
                    timeSlot = ({ ...timeSlot, title: newEvent.title }) :
                    alert(`The time is overlapped`)
                    )

        // timeSlots()[Number(newEvent.starts)]
        // timeSlots.map((timeslot, index) => {
        //     index >= Number(newEvent.starts) &&
        //     index <= Number(newEvent.ends) &&
        //     timeslot.title !== '' ?
        //     "":""
                // timeslot({...timeslot, title: newEvent.title}) :
        )
        // Number(newEvent.starts) <= timeSlots. && Number(newEvent.ends)
    }

    // const isTitleEmpty = (i) {
    //     i.title === '' ?
    //         fale : newEvent.title
    // }
    const submitHandler = (e) => {
        e.preventDefault()
        addToTimeslot()
        console.log(`newEvent from submitHandler ${newEvent}`)
        console.log(`timeSlot array from submitHandler: ${timeSlots()}`)
        setNewEvent({title: '', starts: 0, ends: 0})
        // timeSlots().map((timeslot, index) => {
        //     return
        // })
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
                        timeSlots().map((hour, index) => {
                            return <option key={index}>{hour.time}</option>
                        })
                    }
                </select>
                {/* <input type="time" onChange={getStarts} value={starts}/> */}
            </div>
            <div className="input-wrapper">
                <label>Ends </label>
                <select 
                    className="edit-plan-time"
                    onChange={getEnds}
                    value={newEvent.ends}
                >     
                    {
                        timeSlots().map((hour, index) => {
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
            </div> 
            <div>
                <textarea placeholder="Notes" rows="4" onChange={getMemo}>
                </textarea>
            </div> */}
            <input type="submit" onClick={submitHandler} />
        </form>
    )
}

