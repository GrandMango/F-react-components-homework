import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import Chat from '../Chat/Chat';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Router>
          <Switch>
            <Route excat path="/clientService">
              <Chat />
            </Route>

            <Route excat path="/NotFound">
              <NotFound />
            </Route>

            <Route excat path="/">
              <WelcomePage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
