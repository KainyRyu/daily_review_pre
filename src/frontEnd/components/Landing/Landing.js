import React, { Component } from 'react'
import Logo from '../../image/DR.svg';
import './landing.css';
import Login from '../Login';
import firebase from '../../firebase';
// import firebase from "firebase";

firebase.firestore().collection('times').add({
    title: 'Ruby',
    times_seconds: 45
})



export default function Landing() {
    
    return (
        <div className="Landing">
            <img className="landing_logo" src={Logo} alt="logo" />
            <div className="sign-in">
                <span>Sign in with Google</span>
                <Login />
            </div>
        </div>
    )

}
