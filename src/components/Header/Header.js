import React from 'react';

class Header extends React.Component {
  render() {
    const firstname = 'Nupur';
    const lastname = 'Maheshwari';

    return (
      <header className="row center-align ">
        <h4 className="col s12 hide-on-small-only">{firstname + ' ' + lastname} Presents:</h4>
        <h5 className="col s12 hide-on-med-and-up">{firstname + ' ' + lastname} Presents:</h5>
      </header>
    );
  }
}

export default Header;