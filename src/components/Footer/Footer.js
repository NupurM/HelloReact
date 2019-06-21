import React from 'react';
import Greeting from './Greeting';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer><Greeting /></footer>
    );
  }
}

export default Footer;