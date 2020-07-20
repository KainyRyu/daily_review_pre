import React from 'react'
import DailyPlan from '../DailyPlan/DailyPlan'
import Priority from '../Priority/Priority'
import './home.css'

export default function Home() {

    return (
        <div id="home">
            <Priority />
            <DailyPlan />
        </div>
    )
}
