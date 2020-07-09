import React, { useState } from "react";
import EditPlan from "./EditPlan";
import timeSlot from './TimeSlot';
import "./dailyPlan.css";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

export default function DailyPlan() {
  const [currentTime, setCurrentTime] = useState(0);
  const [plan, setPlan] = useState("");
  const [review, setReview] = useState("");

  function current() {
    let newDate = new Date();
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();

    return `${hour} : ${minute < 10 ? `0${minute}` : minute}`;
  }

  function timeTable() {
    let displayHours = timeSlot().map((event, index) => (
      <tr>
        {index < 10 ? (
          <>
            <td className="timeslot">0{index} : 00</td>
            <td className="event">
            </td>
            <td className="review"></td>
          </>
        ) : (
          <>
            <td className="timeslot">{index} : 00</td>
            <td className="event"></td>
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
      <EditPlan />
      <table>
        <th>
          <td className="timeslot"></td>
          <td className="event">Plan</td>
          <td className="review">Review</td>
        </th>
        <tbody>{timeTable()}</tbody>
      </table>
    </div>
  );
}
