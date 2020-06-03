import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Priority from './components/Priority/Priority'
import CheckList from './components/CheckList/CheckList'
import Timetable from './components/Timetable/Timetable'

import firebase from './utils/firebase'




function App(props) {

  // const { classes } = props

  // if(!firebase.getCurrentUsername()) {
  //   alert('Please login first')
  //   return null
  // }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/schedule" component={Signup} />
        <Route exact path="/calendar" component={Signup} />
        <Route exact path="/more" component={Signup} />
        {/* <Route exact path="/" component={} /> */}
      </Switch>
      <Navbar />
    </Router>
  );
}

export default App;
