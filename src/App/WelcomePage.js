import React, { Component } from 'react';
import '../Chat/Chat.scss';
import '../Chat/ChatBox/ChatBox.scss';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';

class WelcomePage extends Component {
  render() {
    return (
      <main className="Chat">
        <Header />
        <Container />
        <Footer />
      </main>
    );
  }
}

export default WelcomePage;
