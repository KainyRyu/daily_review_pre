import React from 'react'
import DailyPlan from '../DailyPlan/DailyPlan'
import './home.css'
import Today from './Today'

export default function Home() {

    return (
        <div id="home">
            <Today />
            <DailyPlan />
        </div>
    )
}
