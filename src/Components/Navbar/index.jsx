import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Navbar() {
    return (
        <nav>
            <ul id="links-list">
                <li>
                    <Link to='/'>Login</Link>
                </li>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/produto'>Produtos</Link>
                </li>
            </ul>
        </nav>
    );
}
