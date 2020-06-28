import React, { Component } from 'react';
import shop1 from '../data/shop.json';

class Container extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop1,
    };
  }

  render() {
    const shop = this.state.shop1;

    return (
      <div className="ChatBox WelcomeBox">
        <div className="WelcomeContainer">
          <img src="https://upload.wikimedia.org/wikipedia/zh/b/bf/Starbucks_Coffee.svg" />
          <h1>{shop.name}</h1>
        </div>
      </div>
    );
  }
}

export default Container;
