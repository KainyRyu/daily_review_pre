import React from 'react'
import Priority from '../Priority/Priority'
import CheckList from '../CheckList/CheckList'
import DailyPlan from '../DailyPlan/DailyPlan'

export default function Home() {

    return (
        <>
            <Priority />
            <DailyPlan />
            <CheckList />
        </>
    )
}
