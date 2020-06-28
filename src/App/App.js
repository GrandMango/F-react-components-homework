import React, { Component } from 'react';
import './App.scss';
import WelcomePage from './WelcomePage';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <WelcomePage />
      </div>
    );
  }
}

export default App;
