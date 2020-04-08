import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Login from './components/Login';
import Register from './components/Register/Register'
import Header from './components/Header';
import Priority from './components/Priority/Priority'
import CheckList from './components/CheckList/CheckList'
import Timetable from './components/Timetable/Timetable'



function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        {/* <Route exact path="/" component={} /> */}
      </Switch>
    </Router>
  );
}

export default App;
