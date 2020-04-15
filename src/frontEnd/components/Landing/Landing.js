import React, { Component } from 'react'
import { Typography, Paper, Avatar, Button } from '@material-ui/core';
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined';
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom';
import Logo from '../../image/DR.svg';
import './landing.css';
import firebase from '../../utils/firebase';
import Signup from '../Signup';



export default function Landing() {
    
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
            <Signup />
                {/* <button onClick={() => app.auth()></button> */}
        </div>
    )

}
