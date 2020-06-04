import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Kevin Keesee's Counter App</h2>
      </header>
      <Counter/>
    </div>
  );
}

export default App;