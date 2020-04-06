import React from 'react';
import Today from './Today';
import './timeTable.css';

export default function TimeTable() {
    return (
        <div className="timetable">
            <Today />
            <div className="timetable-box">
                <div className="time-table_time">
                    <table>
                        <tr>
                        { times() }
                        </tr>
                    </table>
                </div>
                <div className="time-table_content"></div>
                <div className="time-table_rate"></div>
            </div>
        </div>
    )
}

function times() {
    for(var i = 0; i < 25; i++) {
        i + 2;
    }
}