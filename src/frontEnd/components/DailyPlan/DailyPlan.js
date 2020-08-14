import React, { useState } from "react";
import EditPlan from "./EditPlan";
import Review from "./Review/Review";
import timeSlot from './TimeSlot';
import "./dailyPlan.css";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { Link } from "react-router-dom";

export default function DailyPlan() {
  const [currentTime, setCurrentTime] = useState(0);
  const [plan, setPlan] = useState("");
  const [review, setReview] = useState("");

  function current() {
    let newDate = new Date();
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();
    console.log(5)
    return `${hour} : ${minute < 10 ? `0${minute}` : minute}`;
    //the slot time passed, alert for reveiwing
  }

  function timeTable() {
    let displayHours = timeSlot().map((event, index) => (
      <div key={index} className="timeslot-row">
        {index < 10 ? (
          <>
            <div className="timeslot">0{index} : 00</div>
            <div className="plan-wrapper">
              <div className="event-slot"><Link></Link></div>
            {/* if empty ->  <EditPlan starts={starts}/> and create a new event */}
              <div className="review-slot">ㅎ</div>
            </div>
          </>
        ) : (
          <>
            <div className="timeslot">{index} : 00</div>
            <div className="plan-wrapper">
              <div className="event-slot">d</div>
              <div className="review-slot">d</div>
            </div>
          </>
        )}
      </div>
    ));
    return displayHours;
  }
  
  return (
    <div>
      <h1>
        Daily Review <br /> {current()}
      </h1>
      <Review />
      {/* <EditPlan /> */}
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
