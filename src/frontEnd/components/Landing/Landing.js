import React, { Component } from 'react'
import Logo from '../../image/DR.svg';
import './landing.css';
import firebase from '../../firebase';



export default function Landing() {
    
    return (
        <div className="Landing">
            <img className="landing_logo" src={Logo} alt="logo" />
            <button className="auth sign-in" onClick={''}>Login</button>
            <button className="auth sign-up" onClick={''}>Sign Up</button>
                {/* <button onClick={() => app.auth()></button> */}
        </div>
    )

}
