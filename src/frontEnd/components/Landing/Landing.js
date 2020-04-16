import React, { useState, useEffect } from 'react'
import { Typography, Paper, Avatar, Button } from '@material-ui/core';
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined';
import withStyles from '@material-ui/core/styles/withStyles'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Link } from 'react-router-dom';
import Logo from '../../image/DR.svg';
import './landing.css';
import firebase from '../../utils/firebase';
import Signup from '../Signup';



export default function Landing() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!isSignedIn)
        })
    }, [])

    return (
        <div className="Landing">
            <img className="landing_logo" src={Logo} alt="logo" />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                component={Link}
                to="/login"
            >
                Login
            </Button>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                component={Link}
                to="/signup"
            >
                Sign Up
            </Button>
            {isSignedIn ? (
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                />
            ) : (
                <div>Signed in!</div>
            )}
                {/* <button onClick={() => app.auth()></button> */}
        </div>
    )

}
