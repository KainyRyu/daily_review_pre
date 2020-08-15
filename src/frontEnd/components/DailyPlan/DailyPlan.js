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
    let displayHours = timeSlots().map((timeSlot, index) => (
      <div key={index} className="timeslot-row">
        {index < 10 ? (
          <>
            <div className="timeslot">0{index} : 00</div>
            <div className="plan-wrapper">
              <div className="event-slot"><Link to="/edit_plan">{/*event.title*/}</Link></div>
            {/* if empty ->  <EditPlan starts={starts}/> and create a new event */}
              <div className="review-slot"><Link to="/review">{/*event.review*/}</Link>  </div>
            </div>
          </>
        ) : (
          <>
            <div className="timeslot">{index} : 00</div>
            <div className="plan-wrapper">
              <div className="event-slot">  </div>
              <div className="review-slot">  </div>
            </div>
          </>
        )}
      </div>
    ));
    return displayHours;
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
