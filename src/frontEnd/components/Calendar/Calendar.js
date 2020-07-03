import React, { useState } from "react";
import Rcal from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './calendar.css'

export default function Calendar() {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date)
  }
  return (
    <div>
      <h1>Calendar and some changes working?</h1>
      <div id="calendar">
        <Rcal 
          className="calendar"
          onChange={onChange}
          value={date}
        />
        <h1>{date.toString()}</h1>
      </div>
    </div>
  );
}
