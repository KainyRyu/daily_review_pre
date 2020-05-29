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
// import Navbar from './components/Navbar/Navbar'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        {/* <Route exact path="/" component={} /> */}
      </Switch>
    </Router>
  );
}

export default App;
