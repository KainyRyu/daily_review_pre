import React from 'react';
import Today from './Today';
import './timeTable.css';

export default function TimeTable() {
    return (
        <div className="timetable">
            <Today />
            <div className="timetable-box"></div>
            <div className="time-table_time"></div>
        </div>
    )
}
