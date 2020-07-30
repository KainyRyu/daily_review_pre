import React, { useState } from "react";
import EditPlan from "./EditPlan";
import Review from "./Review";
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
            <td className="event" key={index}></td>
          {/* if empty ->  <EditPlan starts={starts}/> and create a new event */}
            <td className="review"></td>
          </>
        ) : (
          <>
            <td className="timeslot">{index} : 00</td>
            <td className="event" key={index}></td>
            <td className="review"></td>
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
      <Review />
      <table>
            <thead>
                <tr>
                    <th className="timeslot"></th>
                    <th className="event">Plan</th>
                    <th className="review">Review</th>
                </tr>
            </thead>
            <tbody>{timeTable()}</tbody>
      </table>
    </div>
  );
}
