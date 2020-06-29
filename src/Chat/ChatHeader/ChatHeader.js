import React, { Component } from 'react';
import './ChatHeader.scss';
import { Link } from 'react-router-dom';

class ChatHeader extends Component {
  render() {
    const { shop } = this.props;
    const logoStyle = {
      backgroundImage: `url(${shop.logo})`,
    };
    return (
      <div>
        <header className="ChatHeader">
          <div className="logo" style={logoStyle} />
          <h1>{shop.name}</h1>
        </header>
        <div className="LinkArrowContainer">
          <Link to="/" className="LinkArrow">
            {' '}
            &#60;{' '}
          </Link>
        </div>
      </div>
    );
  }
}

export default ChatHeader;
