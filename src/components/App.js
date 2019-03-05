import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
  	const title = "Edit src/App.js and save to reload.";
  	const website = "https://reactjs.org";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
	          {title}
          </p>
          <a
            className="App-link"
            href={website}
            target="_blank"
            rel="noopener noreferrer"
          >
            visit
          </a>
        </header>
      </div>
    );
  }
}

export default App;
