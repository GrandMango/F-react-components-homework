import React, { Component } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: {},
      messages: [],
    };
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);

    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages,
      });
    }, 1000);
  }

  addNewMessage = (messages) => {
    this.setState(
      {
        messages,
      },
      () => {
        this.autoReply();
      }
    );
  };

  autoReply = () => {
    const message = this.state.messages[this.state.messages.length - 1];

    if (message.role === 'ROBOT') return;
    const autoMessage = [];

    answersData.forEach((element) => {
      element.tags.forEach((tag) => {
        if (message.text.includes(tag)) {
          if (autoMessage.length === 0) {
            autoMessage.push(element);
          }
          if (autoMessage.length > 0 && autoMessage[autoMessage.length - 1] !== element) {
            autoMessage.push(element);
          }
        }
      });
    });

    if (autoMessage.length === 0) return;
    const messages = this.state.messages.concat(autoMessage);

    setTimeout(() => {
      this.setState({
        messages,
      });
    }, 1000);
  };

  render() {
    const { shop, messages } = this.state;
    return (
      <main className="Chat">
        <ChatHeader shop={shop} />
        <ChatBox messages={messages} addNewMessage={this.addNewMessage} />
        <ChatInput messages={messages} addNewMessage={this.addNewMessage} />
      </main>
    );
  }
}

export default Chat;
