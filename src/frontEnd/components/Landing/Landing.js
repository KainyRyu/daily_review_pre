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
import Loading from '../../Loading';

export default function Landing({ currentUser }) {

  // const [isSignedIn, setIsSignedIn] = useState(false);
  // const [currentUser, setCurrentUser] = useState(false);
  // useEffect(() => {
  //   async function result(){
  //     await firebase.auth().onAuthStateChanged((user) => {
  //       setIsSignedIn(!!user);
  //       setCurrentUser(user);
  //     });
  //     await console.log(currentUser);
      
  //   }
  //   result();
  // }, []);

  return (
    <div className="Landing">
      {currentUser ? (
        <>
          <Router>
            <Today />
            <div>{currentUser.displayName}</div>
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
        Something went wrong! Cannot fetch the user
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
