import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(<MyInfo />, document.getElementById('root'));

function MyInfo() {
    return (
        <div>
            <h1>Nupur Maheshwari</h1>
            <p>I am trying to learn React with the help of Bob Ziroll.</p>
            <ol>
                <li>Hawaii</li>
                <li>San Francisco</li>
                <li>Downtown</li>
            </ol>
        </div>
    );
}