import React from 'react';
import logo from './Git-Logo-2Color.png';
import Me from './components/Me'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Me name="Chase" />
    </div>
  );
}

export default App;
