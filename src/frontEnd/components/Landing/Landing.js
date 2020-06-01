import React, { useState, useEffect } from 'react'
import { Typography, Paper, Avatar, Button } from '@material-ui/core';
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined';
import withStyles from '@material-ui/core/styles/withStyles'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Link } from 'react-router-dom';
import Logo from '../../image/DR.svg';
import './landing.css';
import firebase from 'firebase';
import Signup from '../Signup';
import Login from '../Login'


export default function Landing() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user)
            console.log("user", user)
        })
    }, [])

    return (
        <div className="Landing">
            <img className="landing_logo" src={Logo} alt="logo" />
            {isSignedIn !== false ? (
                <>
                    <div>Signed in!</div>
                    <Button onClick={() => firebase.auth().signOut()}>
                        Sign out
                    </Button>
                    <h1>Hello, I'm {}</h1>
                    <h1>{firebase.auth().currentUser.displayName}</h1>
                    <img
                        alt="profile picture"
                        src={firebase.auth().currentUser.photoURL}
                    />
                    <Login />

                </>
            ) : (
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                />
            )}
                {/* <button onClick={() => app.auth()></button> */}
        </div>
    )
    // async function login() {
    //     try {
    //         await firebase.login(email, password)
    //         props.history.replace('/')
    //     } catch(error) {
    //         alert(error.message)
    //     }
    // }

}
