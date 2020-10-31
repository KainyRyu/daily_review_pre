import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import firebase from 'firebase';
import Home from '../Home/Home';
import Priority from '../../../pages/Priority/Priority'
import EditPlan from '../DailyPlan/EditPlan';
import Today from './Today';
import './landing.css';
import NotFound from '../../../NotFound';
import Review from '../DailyPlan/Review/Review';

export default function Landing({ firebaseUser }) {
  const auth = useContext(AuthContext);

  return (
    <div className="Landing">
      <Router>
        <Today />
        <div>{firebaseUser.displayName}</div>
          <div id="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/priority" component={Priority} />
              <Route exact path="/schedule" component={Home} />
              <Route exact path="/editplan" component={EditPlan}/>
              <Route exact path="/error" component={NotFound} />
              <Route exact path="/review" component={Review}/>
              {/* <Route exact path="/more" component={More} /> */}
              {/* <Route exact path="/" component={} /> */}
            </Switch>
          </div>
        {/* <Navbar /> */}
      </Router>
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
