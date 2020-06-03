import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loading from './Loading';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
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
        <div id="content">
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/schedule" component={Home} />
          <Route exact path="/calendar" component={Home} />
          <Route exact path="/more" component={More} />
          {/* <Route exact path="/" component={} /> */}
        </div>
      </Switch>
      <Navbar />
    </Router>
  ) : <Loading />
}

export default App;
