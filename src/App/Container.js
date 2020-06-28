import React, { Component } from 'react';

class Container extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: this.props.shop,
    };
  }

  render() {
    const {shop} = this.state;

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
