import React, { useState, useEffect } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core'
import { BrouserRouter as Router, Switch, Route } from 'react-router-dom';

const theme = createMuiTheme();


export default function SignIn(props) {
    const { classes } = props
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline /> 
        </MuiThemeProvider>

    )
}
