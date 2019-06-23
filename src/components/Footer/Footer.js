import React from 'react';
import Credits from './Credits';
import Greeting from './Greeting';
import Signature from './Signature';

class Footer extends React.Component {
  render() {
    return (
      <footer className="row center-align">
        <div className="row">
          <Greeting />
        </div>
        <div className="row">
          <Credits />
        </div>
        <div className="row">
          <Signature />
        </div>
      </footer>
    );
  }
}

export default Footer;