import React, { useState } from "react";
import EditPlan from "./EditPlan";
// import Review from "./Review/Review";
import timeSlots from './TimeSlots';
import "./dailyPlan.css";
import { Link } from "react-router-dom";

export default function DailyPlan() {
  const [currentTime, setCurrentTime] = useState(0);

  function current() {
    let newDate = new Date();
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();
    console.log(5)
    return `${hour} : ${minute < 10 ? `0${minute}` : minute}`;
    //the slot time passed, alert for reveiwing
  }

  function addToTimeSlots(obj) {
    timeSlots(...timeSlots, obj)
  }


  function timeTable() {
    return timeSlots().map((timeSlot, index) => (
      <div key={index} className="timeslot-row">
        {
          <>
            <div className="timeslot">{timeSlot.time} : 00</div>
            <div className="plan-wrapper">
                <div className="event-slot">  </div>
                <div className="review-slot">  </div>
            </div>
          </>
        }

      </div>
    ));
  }        
  
  return (
    <div>
      {/* <Review /> */}
      <EditPlan />
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
