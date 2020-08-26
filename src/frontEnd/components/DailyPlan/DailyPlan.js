import React, {useContext, useState} from "react";
import EditPlan from "./EditPlan";
import Review from "./Review/Review";
import {MyContext} from "../../context/timeSlotsContext";
import "./dailyPlan.css";


export default function DailyPlan() {
  const [currentTime, setCurrentTime] = useState(0);

  const {state, dispatch} = useContext(MyContext);
  const {timeslots} = state;

  let newDate = new Date();
  let hour = newDate.getHours();
  let minute = newDate.getMinutes();
  function current() {
    return `${hour} : ${minute < 10 ? `0${minute}` : minute}`;
    //the slot time passed, alert for reveiwing
  }

  function totalProductivity() {
    console.log(timeslots)
    const reviews = timeslots.map(timeslot => timeslot.review)
    const reviewSet = new Set(reviews)
    reviewSet.delete("")
    return Array.from(reviewSet);
}
console.log('total review else = ',totalProductivity().length)
console.log(timeslots)

  function changeTimeSlot(newTimeSlot) {
    dispatch({
      type: "CHANGE_TIMESLOT",
      newTimeSlot: newTimeSlot
    })
  }

  function timeTable() {
    return timeslots.map((timeslot, index) => (
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
            <div className="timeslot">{timeslot.time} : 00</div>
            <div className="plan-wrapper">
                <div className="event-slot">
                  {timeslot.title}
                </div>
                <div className="review-slot">
                  {timeslot.review}
                </div>
            </div>
          </>
        }
      </div>
    ));
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
