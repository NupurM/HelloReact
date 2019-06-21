import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    const firstname = 'Nupur';
    const lastname = 'Maheshwari';

    return (
      <header className="navbar">
        <div>{firstname + ' ' + lastname} Presents:</div>
      </header>
    );
  }
}

export default Header;