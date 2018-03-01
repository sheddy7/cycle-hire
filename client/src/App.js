import React, { Component } from 'react';

import BikeGraph from './components/BikeGraph';

import logo from './assets/bike.svg';
import './assets/App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cycle hire example app</h1>
        </header>
        <BikeGraph />
      </div>
    );
  }
}

export default App;
