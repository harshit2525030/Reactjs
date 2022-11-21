import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: "white",
    };

    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to='/' style={navStyle}>
                    <li>Home</li>
                </Link>

                <Link to='/about'  style={navStyle}>
                    <li>About</li>
                </Link>

                <Link to='/users'  style={navStyle}>
                    <li>Users</li>
                </Link>
                <Link to='/contact'  style={navStyle}>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
  );
}

export default Nav;