import React from 'react';
import Logo from '../image/DR.svg';
import './landing.css';

export default function Landing() {
    return (
        <div>
            <img className="landing_logo" src={Logo} alt="logo" />
            <div className="sign-in">
                <span>Sign in with Google</span>
            </div>
        </div>
    )
}
