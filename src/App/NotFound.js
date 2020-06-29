import React, { Component } from 'react';
import '../Chat/ChatHeader/ChatHeader.scss';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div className="Chat">
        <header className="ChatHeader">
          <h1>NotFound</h1>
        </header>

        <div className="ChatBox WelcomeBox">
          <div className="WelcomeContainer">
            <h1 className="ComingSoon">Coming Soon...</h1>
            <Link to="/">Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
