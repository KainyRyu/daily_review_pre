import React, { useState } from "react";
import EditPlan from "./EditPlan";
// import Review from "./Review/Review";
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

    return `${hour} : ${minute < 10 ? `0${minute}` : minute}`;
    //the slot time passed, alert for reveiwing
  }

  function timeTable() {
    let displayHours = timeSlot().map((event, index) => (
      <tr key={index}>
        {index < 10 ? (
          <>
            <td className="timeslot">0{index} : 00</td>
            <td className="event-slot"></td>
          {/* if empty ->  <EditPlan starts={starts}/> and create a new event */}
            <Link><td className="review-slot"></td></Link>
          </>
        ) : (
          <>
            <td className="timeslot">{index} : 00</td>
            <td className="event-slot"></td>
            <Link to="/"><td className="review-slot"></td></Link>
          </>
        )}
      </tr>
    ));
    return displayHours;
  }
  
  return (
    <div>
      <h1>
        Daily Review <br /> {current()}
      </h1>
      <EditPlan />
      <table>
            <thead>
                <tr>
                    <th className="timeslot"></th>
                    <th className="event-slot">Plan</th>
                    <th className="review-slot">Review</th>
                </tr>
            </thead>
            <tbody>{timeTable()}</tbody>
      </table>
    </div>
  );
}
