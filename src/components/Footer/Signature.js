import React from 'react';
import './Signature.css'
class Signature extends React.Component {
  render() {
    const firstname = 'Nupur';
    const lastname = 'Maheshwari';
    return (
      <div className="col s12 teal-text">
        <em>&copy;2019 Created by <strong>{firstname + ' ' + lastname}</strong></em><br />
        <a href="https://www.linkedin.com/in/nupur-maheshwari/"
          title="Connect with me on LinkedIn"
          target="_blank"
          className="teal-text">
          <i class="fa fa-linkedin-square"></i>
        </a>
        <a href="https://github.com/NupurM/HelloReact"
          title="See the source code on GitHub"
          target="_blank"
          className="teal-text">
          <i class="fa fa-github"></i>
        </a>
      </div>
    );
  }
}

export default Signature;