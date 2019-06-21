import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        const firstname = 'Nupur';
        const lastname = 'Maheshwari';

        return (
            <header className="navbar">
                <p>{firstname + ' ' + lastname} here! I am trying to learn React with the help of Bob Ziroll.</p>
            </header>
        );
    }
}

export default Header;