import React from "react";
import Rcal from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './calendar.css'
export default function Calendar() {
  return (
    <div>
      <h1>Calendar and some changes working?</h1>
      <div id="calendar">
        <Rcal className="calendar"/>
      </div>
    </div>
  );
}
