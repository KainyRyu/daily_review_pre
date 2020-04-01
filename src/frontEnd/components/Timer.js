import React, { useState, useEffect } from 'react';
import './timer.css';


export default function Timer() {

    const [time, setTime] = useState;


    return (
        <div className="Timer">
            <div className="Timer-circle"></div>
            <div className="Timer-circle-overlay"></div>
            <select>
                <option></option>
            </select>
        </div>
    )
}