import React from 'react';
import './App.css';
import Landing from './components/Landing';
import Header from './components/Header';
import Priority from './components/Priority'



function App() {
  return (
    <div className="App">
      <Header />
      <Priority />
      {/* <Landing /> */}
    </div>
  );
}

export default App;
