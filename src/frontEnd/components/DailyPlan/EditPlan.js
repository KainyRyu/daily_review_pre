import React, { useState, useEffect } from 'react';
import './editplan.css';

const databaseURL = "https://dailyreview-7e684.firebaseio.com/";

export default function EditPlan({ timeslots, changeTimeSlot, id }) {
    
    const [apiData, setApiData] = useState([]);
    const [updateArray, setUpdateArray] = useState([]);
    const [newEvent, setNewEvent] = useState({
        title: '',
        starts: 0,
        ends: 0,
    });

    const getTitle = (e) => setNewEvent({...newEvent, title: e.target.value.trim()})
    const getStarts = (e) => setNewEvent({...newEvent, starts: e.target.value})
    const getEnds = (e) => setNewEvent({...newEvent, ends: e.target.value})

    useEffect(() => {
        fetch(`${databaseURL}timeslots.json`)
        .then(res => res.json())
        .then(data => setApiData(Object.values(data)));
    },[])
    
        const timeRange = apiData
            .splice(newEvent.starts, (newEvent.ends - newEvent.starts + 1))
            .map(timeslot => timeslot = {...timeslot, title: newEvent.title})

    
        const postingTitle = async() => {
            const response = await fetch(`${databaseURL}timeslots.json`,{
                method: 'POST',
                body: JSON.stringify(timeRange)
            })
            const result = await response.json();
            if (response.status !== 200) {
                throw new Error(response.statusText)
            }
            Promise.all([response, result])
        }
        
        async function submitHandler(e) {
            e.preventDefault()
            postingTitle()
            // postingTitle([]).then(console.log)  
        }


    // const filtering = async(title) => {
    //     const timeRange = await apiData
    //         .filter((timeslot, index) => 
    //         index >= parseInt(newEvent.start) && index <= parseInt(newEvent.end));
    //     const titleFilter = await timeRange.some(time => time.title !== '')
    //     const fetchingData = await fetch(`${databaseURL}/timeslots.json`,{
    //         method: 'POST',
    //         body: JSON.stringify(title)
    //     });
    //     const response = await fetchingData.json()
    //         !
    //     }
    //     return data
    // }
    // function eventUpdate() {
    //     if (!filtering) {
    //         setApiData(apiData.filter((timeslots,index) => {
    //             const timeRange = index >= parseInt(newEvent.start) && index <= parseInt(newEvent.end)
    //             timeRange.map(timeslot => timeslot.title = newEvent.title)
    //         }))
    //     }
    // }

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

    return (
        <form id="edit-form" >
            <div className="input-wrapper">
                <input 
                    id="new-event-input"
                    type="text" 
                    placeholder="New Event" 
                    onChange={getTitle} 
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
            <button className="submit-btn" onClick={submitHandler}>Submit</button>
        </form>
    )
}

