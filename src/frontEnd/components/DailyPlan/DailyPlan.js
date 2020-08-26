import React, { useState } from "react";
import EditPlan from "./EditPlan";
import Review from "./Review/Review";
import "./dailyPlan.css";


export default function DailyPlan() {
  const [currentTime, setCurrentTime] = useState(0);
  const [timeslots, setTimeslots] = useState([
    {time: '00', title: '', review: '' },
    {time: '01', title: '', review: '' },
    {time: '02', title: '', review: 'Sleep' },
    {time: '03', title: '', review: 'Sleep' },
    {time: '04', title: '', review: 'Sleep' },
    {time: '05', title: '', review: '' },
    {time: '06', title: '', review: '' },
    {time: '07', title: '', review: '' },
    {time: '08', title: '', review: 'Yoga' },
    {time: '09', title: '', review: '' },
    {time: '10', title: '', review: '' },
    {time: '11', title: '', review: '' },
    {time: '12', title: '', review: 'Reading' },
    {time: '13', title: '', review: '' },
    {time: '14', title: '', review: '' },
    {time: '15', title: '', review: '' },
    {time: '16', title: '', review: '' },
    {time: '17', title: '', review: '' },
    {time: '18', title: '', review: '' },
    {time: '19', title: '', review: '' },
    {time: '20', title: '', review: '' },
    {time: '21', title: '', review: '' },
    {time: '22', title: '', review: '' },
    {time: '23', title: '', review: '' },
  ])

  let newDate = new Date();
  let hour = newDate.getHours();
  let minute = newDate.getMinutes();
  function current() {
    return `${hour} : ${minute < 10 ? `0${minute}` : minute}`;
    //the slot time passed, alert for reveiwing
  }

  function totalProductivity() {
    const reviews = timeslots.map(timeslot => timeslot.review)
    const reviewSet = new Set(reviews)
    reviewSet.delete("")
    return Array.from(reviewSet);
}
console.log('total review else = ',totalProductivity().length)
console.log(timeslots)

  function changeTimeSlot(newTimeSlot) {
    const newTimeSlots = timeslots.map((timeslot) =>
      (timeslot.time >= newTimeSlot.starts && timeslot.time <= newTimeSlot.ends) ? {
        ...timeslot,
        "title": newTimeSlot.title
      } : timeslot
    )
    setTimeslots(newTimeSlots);
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
