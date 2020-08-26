import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase';
import Login from '../Login';
import Home from '../Home/Home';
import Priority from '../Priority/Priority'
import EditPlan from '../DailyPlan/EditPlan';
import Navbar from '../Navbar';
import Today from './Today';
import './landing.css';

export default function Landing() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
      console.log('user', user);
    });
  }, []);

  return (
    <div className="Landing">
      {isSignedIn !== false ? (
        <>
          <Router>
            <Today />
            <Switch>
              <div id="content">
                <Route exact path="/" component={Home} />
                <Route exact path="/priority" component={Priority} />
                <Route exact path="/schedule" component={Home} />
                <Route exact path="/editplan" component={EditPlan} />
                {/* <Route exact path="/more" component={More} /> */}
                {/* <Route exact path="/" component={} /> */}
              </div>
            </Switch>
            <Navbar />
          </Router>
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
  // async function login() {
  //     try {
  //         await firebase.login(email, password)
  //         props.history.replace('/')
  //     } catch(error) {
  //         alert(error.message)
  //     }
  // }
}
