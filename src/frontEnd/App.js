import React from 'react';
import './App.css';
import Landing from './components/Landing';
import Header from './components/Header';
import Priority from './components/Priority'
import CheckList from './components/CheckList'
import TimeTable from './components/TimeTable'



function App() {
  return (
    <div className="App">
      {/* <Landing /> */}
      <Header />
      {/* <Priority /> */}
      {/* <CheckList /> */}
      <TimeTable />
    </div>
  );
}

export default App;
