import React, { Component } from 'react';
import '../Chat/ChatInput/ChatInput.scss';
import { BrowserRouter as Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <nav className="Nav">
          <Link to="/clientService">客服</Link>

          <Link to="/hello">618活动</Link>

          <Link to="/hello">关于我们</Link>
        </nav>
      </footer>
    );
  }
}

export default Footer;
