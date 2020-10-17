import React, { useState, useEffect, useContext } from 'react';
import firebase, { initializeApp } from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebaseInitializing from '../utils/firebase';
import { useHttpClient } from '../hooks/http-hook';
import { AuthContext } from '../context/auth-context';
import Logo from '../../image/DR.svg';


export default function Login() {
    const auth = useContext(AuthContext);
    const [isSignedIn, setIsSignedIn] = useState(null);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    useEffect(() => {	 
        async function result () {
            await firebaseInitializing.isInitialized().then(value => {	    
                setIsSignedIn(value);
                console.log(value);
            });
            if (isSignedIn) {
                try {
                    await sendRequest(
                        'http://localhost:5000/api/users/signup',
                        'POST',
                        JSON.stringify({
                            name: isSignedIn.displayName,
                            email: isSignedIn.email,
                            fuid: isSignedIn.uid
                        }),
                        {
                            'content-Type': 'application/json'
                        }
                    );
                    auth.signIn();
                } catch (err) {}
            }
        } 
        result();

    }, []);


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


    
    return (
        <>
            <img className="landing_logo" src={Logo} alt="logo" />
            <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
            />
        </>

    )
}
