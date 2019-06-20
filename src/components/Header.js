import React from 'react';

function Header() {
    const firstname = 'Nupur';
    const lastname = 'Maheshwari';

    return (
        <header className="navbar">
            <p>{firstname +' '+ lastname} here! I am trying to learn React with the help of Bob Ziroll.</p>
        </header>
    );
}

export default Header;