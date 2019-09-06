import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to statusly.</p>
        <a
          className="GitHub"
          href="https://github.com/DonkeyKongJr/statusly"
          target="_blank"
          rel="noopener noreferrer"
        >
          Show on GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
