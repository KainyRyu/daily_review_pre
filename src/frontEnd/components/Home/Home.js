import React from 'react'
import DailyPlan from '../DailyPlan/DailyPlan'
import Priority from '../Priority/Priority'
import Review from '../DailyPlan/Review'
import './home.css'

export default function Home() {

    return (
        <div id="home">
            <Review />
            <Priority />
            <DailyPlan />
        </div>
    )
}
