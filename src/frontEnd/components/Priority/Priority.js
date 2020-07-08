import React from 'react';
import './priority.css';


export default function Priority() {
    return (
        <div className="main">
            <div className="priority-box red">
                <h3>Urgent & Significant</h3>
                <ul>
                </ul>
            </div>
            <div className="priority-box orange">
                <h3>Urgent & Insignificant</h3>
                <ul>
                </ul>
            </div>
            <div className="priority-box yellow">
                <h3>Not Urgent & Significant</h3>
                <ul>
                </ul>
            </div>
            <div className="priority-box gray">
                <h3>Not Urgent & Insignificant</h3>
                <ul>
                </ul>
            </div>
        </div>
    )
}
