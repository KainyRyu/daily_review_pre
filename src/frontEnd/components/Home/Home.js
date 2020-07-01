import React from 'react'
import Priority from '../Priority/Priority'
import CheckList from '../CheckList/CheckList'
import DailyPlan from '../DailyPlan/DailyPlan'
import './home.css'

export default function Home() {

    return (
        <div id="home">
            <Priority />
            <DailyPlan />
            <CheckList />
        </div>
    )
}
