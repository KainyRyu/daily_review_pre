import React from 'react'
import firebase from 'firebase'
import { Typography, Paper, Avatar, Button } from '@material-ui/core';
import './more.css'

export default function More() {
    return (
        <div>
            <div className="profile">
                <img
                    className="current_user_img"
                    alt="profile picture"
                    src={firebase.auth().currentUser.photoURL}
                />
                <h1>{firebase.auth().currentUser.displayName}</h1>
                <button id="signout" onClick={() => firebase.auth().signOut()}>
                    Sign out
                </button>
            </div>
            <div className="mores">Process</div>
            <div className="mores">See the plans</div>
            <div className="mores">Link to Google calendar</div>
            <div className="mores">Setting</div>
            <div className="mores">Contact</div>
        </div>
    )
}
