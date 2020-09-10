import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import EditPlan from "./EditPlan";
import Review from "./Review/Review";
// import {MyContext} from "../../context/timeSlotsContext";
import "./dailyPlan.css";

const databaseURL = "https://dailyreview-7e684.firebaseio.com/";

export default function DailyPlan() {

  const [timeslots, setTimeslots] = useState([]);
  // const {state, dispatch} = useContext(MyContext);
  // const {timeslots} = state;

  let newDate = new Date();
  let hour = newDate.getHours();
  let minute = newDate.getMinutes();
  function current() {
    return `${hour} : ${minute < 10 ? `0${minute}` : minute}`;
    //the slot time passed, alert for reveiwing
  }
  
  async function fetchURL() {
    const response = await fetch(`${databaseURL}timeslots.json`);
    const result = await response.json();
    Promise.all([response, result]);
    // setEventTimes(() =>  response.json());
  }

  useEffect(() => {
    fetch(`${databaseURL}timeslots.json`)
    .then(res => res.json())
    .then(data => setTimeslots(Object.values(data)));
  }, [])
          
            // function totalProductivity() {
            //   console.log(timeslots)
            //   const reviews = timeslots.map(timeslot => timeslot.review)
            //   const reviewSet = new Set(reviews)
            //   reviewSet.delete("")
            //   return Array.from(reviewSet);
            // }
            // function changeTimeSlot(newTimeSlot) {
            //   dispatch({
            //     type: "CHANGE_TIMESLOT",
            //     newTimeSlot: newTimeSlot
            //   })
            // }

  function timeTable() {
    return timeslots ? timeslots.map((timeslot, index) => (
      <div 
        key={index} 
        className="timeslot-row"
        style={{
          backgroundColor: 
            index < hour ? 'lightgrey' : 'none'
          
        }}
      >
        {
          <>
            <div className="timeslot">{
              index < 10 ? `0${index}` : index
            } : 00</div>
            <div className="plan-wrapper">

                  <Link className="event-slot" to={`/editplan`} >{timeslot.title}</Link>
                {/* <div > */}
                  <Link className="review-slot" to="/review">{timeslot.review}</Link>
                {/* </div> */}
            </div>
          </>
        }
      </div>
    )): <></>;
  }        
  
  return (
    <div>
      <Router>
        <Switch>
          
        </Switch>
      </Router>
      {/* <Review timeslots={timeslots} /> */}
      {/* <EditPlan timeslots={timeslots} /> */}
      <h1>
        Daily Review <br /> {current()}
      </h1>
      <br />

      <div className="timeslot-wrapper">
        <div className="timeslot-row">
          <div className="timeslot"></div>
          <div className="plan-wrapper">
            <div className="event-slot">Plan</div>
            <div className="review-slot">Review</div>
          </div>
        </div>
        <div>{timeTable()}</div>
      </div>
    </div>
  );
}
