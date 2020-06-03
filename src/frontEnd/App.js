import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loading from './Loading';
import Landing from './components/Landing/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Priority from './components/Priority/Priority'
import CheckList from './components/CheckList/CheckList'
import Timetable from './components/Timetable/Timetable'
import More from './components/More/More'



import firebase from './utils/firebase'




function App(props) {

  const [firebaseInitialized, setFirebaseInitialized] = useState(false)

  useEffect(() => {
    firebase.isInitialized().then(value => {
      setFirebaseInitialized(value)
    })
  })

  return firebaseInitialized !== false ? (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/schedule" component={Signup} />
        <Route exact path="/calendar" component={Signup} />
        <Route exact path="/more" component={More} />
        {/* <Route exact path="/" component={} /> */}
      </Switch>
      <Navbar />
    </Router>
  ) : <Loading />
}

export default App;
