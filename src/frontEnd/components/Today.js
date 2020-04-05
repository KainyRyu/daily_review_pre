import React from 'react';
import './priority.css';

export default function Today() {
    
    function today() {
        let newDate = new Date();
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satuday'];
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let day = days[newDate.getUTCDay()];
        let date = newDate.getUTCDate();
        let month = months[newDate.getUTCMonth()];
        let year = newDate.getUTCFullYear();
        return `${day}, ${date} ${month} ${year}`
    }

    return (
        <>
            <div className="main-today">{today()}</div>
        </>
    )
}
