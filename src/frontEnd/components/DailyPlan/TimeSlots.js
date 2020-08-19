import React, { useState } from "react";
export default function Timeslots(){
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
  function addTitle(newTitle) {
    setTimeslots(timeslots.map(timeslot => timeslot.title = newTitle))
  }

return timeslots
} 

