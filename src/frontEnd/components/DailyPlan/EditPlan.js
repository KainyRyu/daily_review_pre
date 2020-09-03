import React, { useState, useEffect } from 'react';
import './editplan.css';

const databaseURL = "https://dailyreview-7e684.firebaseio.com/";

export default function EditPlan({ timeslots, changeTimeSlot, id }) {
    
    const [newEvent, setNewEvent] = useState({
        title: '',
        starts: 0,
        ends: 0,
    });

    function handleValueChange(e) {
        const name = e.target.name;
        setNewEvent({ ...newEvent, name: e.target.value});
    }

    async function eventUpdate() {
        const response = await fetch(`${databaseURL}timeslots`,{
            method: 'POST',
            body: JSON.stringify(newEvent.title)
        });
        const data = await response.json();
        const timeRange = await data.filter((timeslot, index) => {
            return index >= parseInt(newEvent.start) && index <= parseInt(newEvent.end)
        })
                    
        if (timeRange.some(timeslot => timeslot.title !== '')) {
            alert(`There is an event btween ${newEvent.starts} - ${newEvent.ends}`)
        } else {
            timeRange.map((timeslot) => {
                timeslot.title = newEvent.title
            })
            setNewEvent({title: '', starts: 0, ends: 0});
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        eventUpdate()
        // addNewEvent()
        // console.log(`newEvent from submitHandler ${JSON.stringify(newEvent)}`)
        // console.log(`timeSlot array from submitHandler: ${JSON.stringify(timeslots)}`)
        // setNewEvent({title: '', starts: 0, ends: 0})
    }

    // function addNewEvent() {
    //     if (!hasNoSchedule(newEvent.starts, newEvent.ends)) {
    //         return; 
    //     }

    //     changeTimeSlot(newEvent);
                    // for (let i = parseInt(newEvent.starts); i <= parseInt(newEvent.ends); i++) {
                    //     const timeslot = timeslots[i];
                    //     if (timeslot.time >= newEvent.starts && timeslot.time <= newEvent.ends) {
                    //         timeslot.title = newEvent.title;
                    //         // setNewEvent({title: '', starts: 0, ends: 0});
                    //     }
                    // }
    // }

    // function hasNoSchedule(start, end) {
    //     for (let i = parseInt(start); i <= parseInt(end); i++) {
    //         const timeslot = timeslots[i];
    //         if (timeslot.title !== "") {
    //             setNewEvent({...newEvent, starts: 0, ends: 0})
    //             alert(`There is an event between ${start} - ${end}`);
    //             break;
    //         }
    //     }
    //     return true;
    // }

    return (
        <form id="edit-form" >
            <div className="input-wrapper">
                <input 
                    id="new-event-input"
                    type="text" 
                    placeholder="New Event" 
                    name="title"
                    onChange={handleValueChange} 
                    //if the time's title is empty => "" : timeslots[time].title
                    value={newEvent.title}
                />
            </div>
            <div className="input-wrapper">
                <label>Starts </label>
                <select 
                    className="edit-plan-time"
                    onChange={handleValueChange}
                    name="starts"
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
                    onChange={handleValueChange}
                    name="ends"
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

