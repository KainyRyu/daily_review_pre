import React, { useState, useEffect } from 'react'
import firebase from 'firebase';
import Login from '../Login';
import Home from '../Home/Home'
import './landing.css';

export default function Landing() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user)
            console.log("user", user)
        })
    }, [])

    return (
        <div className="Landing">
            {isSignedIn !== false ? (
                <>
                    <Home />
                </>
            ) : (
                <>
                    <Login />
                </>
            )}
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
