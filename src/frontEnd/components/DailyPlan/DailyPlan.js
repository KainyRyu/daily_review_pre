import React, { useContext, useState, useEffect } from "react";
import EditPlan from "./EditPlan";
import Review from "./Review/Review";
import {MyContext} from "../../context/timeSlotsContext";
import "./dailyPlan.css";
import { Link } from "react-router-dom";

const databaseURL = "https://dailyreview-7e684.firebaseio.com/";

export default function DailyPlan() {
  const [currentTime, setCurrentTime] = useState(0);
  const [eventTimes, setEventTimes] = useState('');

  const {state, dispatch} = useContext(MyContext);
  const {timeslots} = state;

  let newDate = new Date();
  let hour = newDate.getHours();
  let minute = newDate.getMinutes();
  function current() {
    return `${hour} : ${minute < 10 ? `0${minute}` : minute}`;
    //the slot time passed, alert for reveiwing
  }
  
  async function fetchURL() {
    const response = await fetch(`${databaseURL}timeslots.json`);
    setEventTimes(await response.json());
  }

  useEffect(() => {
    fetchURL()
  }, [])

 
  function totalProductivity() {
    console.log(timeslots)
    const reviews = timeslots.map(timeslot => timeslot.review)
    const reviewSet = new Set(reviews)
    reviewSet.delete("")
    return Array.from(reviewSet);
  }


  function changeTimeSlot(newTimeSlot) {
    dispatch({
      type: "CHANGE_TIMESLOT",
      newTimeSlot: newTimeSlot
    })
  }

  function timeTable() {
    return eventTimes ? eventTimes.map((timeslot, index) => (
      <div 
        key={index} 
        className="timeslot-row"
        style={{
          backgroundColor: 
            timeslot.time < hour ? 'lightgrey' : 'none'
          
        }}
      >
        {
          <>
            <div className="timeslot">{
              index < 10 ? `0${index}` : index
            } : 00</div>
            <div className="plan-wrapper">
                <div className="event-slot">
                  {timeslot.title}<Link to="/"></Link>
                </div>
                <div className="review-slot">
                  {timeslot.review}
                </div>
            </div>
          </>
        }
      </div>
    )): <></>;
  }        
  
  return (
    <div>
      <Review timeslots={timeslots} />
      <EditPlan timeslots={timeslots} changeTimeSlot={changeTimeSlot} />
      <h1>
        Daily Review <br /> {current()}
      </h1>
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
