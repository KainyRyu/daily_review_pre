import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loading from './Loading';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Signup from './components/Signup';
import Navbar from './components/Navbar';



import firebase from './utils/firebase'




function App(props) {

  const [firebaseInitialized, setFirebaseInitialized] = useState(false)

  useEffect(() => {
    firebase.isInitialized().then(value => {
      setFirebaseInitialized(value)
    })
  })

  return firebaseInitialized !== false ? (
    <Landing />
  ) : <Loading />
}

export default App;
