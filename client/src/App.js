import React, { Component } from 'react';

import * as restClient from './lib/rest-client';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    restClient.getJson('/api/test')
    .then(resp => {
      console.log(resp);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
