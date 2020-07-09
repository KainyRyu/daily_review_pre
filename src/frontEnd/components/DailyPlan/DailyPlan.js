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

  let displaytime = [
    {
      time: 0,
    },{
      time: 1
    },{
      time: 2,
    },{
      time: 3,
    },{
      time: 4,
    },{
      time: 5,
    },{
      time: 6,
    },{
      time: 7,
    },{
      time: 8,
    },{
      time: 9,
    },{
      time: 10,
    },{
      time: 11,
    },{
      time: 12,
    },{
      time: 13,
    },{
      time: 14,
    },{
      time: 15,
    },{
      time: 16,
    },{
      time: 17,
    },{
      time: 18,
    },{
      time: 19,
    },{
      time: 20,
    },{
      time: 21,
    },{
      time: 22,
    },{
      time: 23,
    },
  ];
//   let event = displaytime.map((display) => ({ time: display.time }));
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
