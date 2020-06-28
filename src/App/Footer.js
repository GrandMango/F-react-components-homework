import React, { Component } from 'react';
import '../Chat/ChatInput/ChatInput.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Chat from '../Chat/Chat';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <Router>
          <nav className="Nav">
            <Link to="/clientService">客服</Link>

            <Link to="/hello">618活动</Link>

            <Link to="/hello">关于我们</Link>
          </nav>

          <Route exact path="/clientService">
            <Chat />
          </Route>
        </Router>
      </footer>
    );
  }
}

export default Footer;
