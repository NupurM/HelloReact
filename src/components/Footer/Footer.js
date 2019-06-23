import React from 'react';
import Greeting from './Greeting';

class Footer extends React.Component {
  render() {
    return (
      <footer className="row center-align">
        <Greeting />
        <h6 className="col s12">And thanks Bob Ziroll for helping me to learn React!</h6>
      </footer>
    );
  }
}

export default Footer;