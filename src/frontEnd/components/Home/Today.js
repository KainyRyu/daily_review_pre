import React from 'react';
import { Icon } from '@iconify/react';
import listCheck from '@iconify/icons-bi/list-check';
import './home.css';

export default function Today() {
    
    function today() {
        let newDate = new Date();
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satuday'];
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let day = days[newDate.getDay()];
        let date = newDate.getDate();
        let month = months[newDate.getMonth()];
        let year = newDate.getFullYear();
        return `${day}, ${date} ${month} ${year}`
    }

    return (
        <>
            <div className="main-today">
                <h4 style={{margin:0}}>{today()}</h4>
                <Icon icon={listCheck} style={{fontSize: '37px'}} />
            </div>
        </>
    )
}
