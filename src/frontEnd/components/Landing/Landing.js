import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase';
import Login from '../Login';
import Home from '../Home/Home';
import Priority from '../Priority/Priority'
import EditPlan from '../DailyPlan/EditPlan';
// import Navbar from '../Navbar';
import Today from './Today';
import './landing.css';
import NotFound from '../../NotFound';
import Review from '../DailyPlan/Review/Review';

export default function Landing() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);
  useEffect(() => {
    async function result(){
      await firebase.auth().onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
        currentUser = {user};
        console.log(user);
      });
      await console.log('Current User name: ' + currentUser);
      
      const result = await fetch('http://localhost:5000/api/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: currentUser.displayName,
          email: currentUser.email,
          password: currentUser.uid
          // email: currentUser.photoURL
        })
      })
      result();
    }
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
                <Route exact path="/editplan" component={EditPlan}/>
                <Route exact path="/error" component={NotFound} />
                <Route exact path="/review" component={Review}/>
                {/* <Route exact path="/more" component={More} /> */}
                {/* <Route exact path="/" component={} /> */}
              </div>
            </Switch>
            {/* <Navbar /> */}
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
