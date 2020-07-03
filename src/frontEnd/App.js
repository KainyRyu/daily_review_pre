import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './Loading';
import Landing from './components/Landing/Landing';

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
