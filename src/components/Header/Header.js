import React from 'react';

class Header extends React.Component {
  render() {


    return (
      <header className="row center-align ">
        <h4 className="col s12 hide-on-small-only">Hello World!</h4>
        <h5 className="col s12 hide-on-med-and-up">Hello World!</h5>
      </header>
    );
  }
}

export default Header;