import React from 'react'
import Priority from '../Priority/Priority'
import CheckList from '../CheckList/CheckList'
import DailyPlan from '../DailyPlan/DailyPlan'
import './home.css'
import Calendar from '../Calendar/Calendar'

export default function Home() {

    return (
        <div id="home">
            {/* <Calendar /> */}
            <Priority />
            <DailyPlan />
            <CheckList />
        </div>
    )
}
