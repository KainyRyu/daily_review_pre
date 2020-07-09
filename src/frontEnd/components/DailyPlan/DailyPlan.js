import React, { useState } from "react";
import "./dailyPlan.css";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

export default function DailyPlan() {
  const [currentTime, setCurrentTime] = useState(0);
  const [plan, setPlan] = useState('');
  const [review, setReview] = useState('');


  function current() {
    let newDate = new Date();
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();

    return `${hour} : ${minute}`;
  }
//

  function timeTable() {
      let newDate = new Date();
      let event = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'
            ]
      let displayHours = event
        .map((event, index) => (<tr>{
            index < 10 ? 
                <>
                    <td className="timeslot">0{index} : 00</td>
                    <td className="event"></td>
                    <td className="review"></td>
                </> : <>
                    <td className="timeslot">{index} : 00</td>
                    <td className="event"></td>
                    <td className="review"></td>
                </>
            }</tr>))
  return displayHours;
  }
// tr > td {index}
  return (
    <div>
      <h1>Daily Review <br /> {current()}</h1>
      <table>
        <th>
          <td className="timeslot"></td>
          <td className="event">Plan</td>
          <td className="review">Review</td>
        </th>
        <tbody>
            {timeTable()}
        </tbody>
      </table>
    </div>
  );
}
