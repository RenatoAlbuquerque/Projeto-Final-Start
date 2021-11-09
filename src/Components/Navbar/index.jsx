import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Navbar() {
    return (
        <nav>
            <ul id="links-list">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/produto'>Produtos</Link>
                </li>
            </ul>
        </nav>
    );
}
