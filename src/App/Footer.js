import React, { Component } from 'react';
import '../Chat/ChatInput/ChatInput.scss';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <nav className="Nav">
          <Link to="/clientService">客服</Link>

          <Link to="/NotFound">6.18活动</Link>

          <Link to="/NotFound">关于我们</Link>
        </nav>
      </footer>
    );
  }
}

export default Footer;
