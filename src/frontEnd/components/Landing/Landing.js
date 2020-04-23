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
            setIsSignedIn({ isSignedIn: !!user })
            console.log(user)
        })
    }, [])

    function signOutBtn() {
        firebase.auth().signOut()
        // setIsSignedIn(false)
    }
    return (
        <div className="Landing">
            <img className="landing_logo" src={Logo} alt="logo" />
            {!isSignedIn ? (
                <>
                    <div>Signed in!</div>
                    <Button onClick={signOutBtn()}>Sign out</Button>

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
