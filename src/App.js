import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

import CountState from './context/count/CountState';
//import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <CountState>
    <Router>
    <div className="App">
      <header className="App-header">
        <h2>Counter App</h2>
      </header>
      <Counter/>
    </div>
    </Router>
    </CountState>
  );
}

export default App;