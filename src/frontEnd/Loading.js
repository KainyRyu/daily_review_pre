import React from 'react'
import Logo from './image/DR.svg';

export default function Loading() {
    return (
        <div style={{ textAlign: 'center'}}>
             <img className="landing_logo" src={Logo} alt="logo" />
             <h1>DAILY REVIEW</h1>
        </div>
    )
}
