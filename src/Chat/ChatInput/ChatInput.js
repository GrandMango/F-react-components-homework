import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      newMessage: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      newMessage: event.target.value,
    });
  };

  sendMessage = () => {
    const {addNewMessage} = this.props;
    const json = {
      role: 'CUSTOMER',
      text: this.state.newMessage,
    };
    const messages = this.props.messages.concat(json);
    addNewMessage(messages);
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" onChange={this.handleChange} />
        <button type="button" onClick={this.sendMessage}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
