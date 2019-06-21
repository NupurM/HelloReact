import React from 'react';
import Greeting from './Greeting';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Greeting />
        <p>Thanks Bob Ziroll for helping me learn React!</p>
      </footer>
    );
  }
}

export default Footer;