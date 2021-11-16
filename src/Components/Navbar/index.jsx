import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag, HiShoppingBag } from "react-icons/hi";
import './style.css';
import Logo from '../../Images/Logo_startSuaBeleza.png'

export default function Navbar(props) {
    const [count, setCount] = useState(-1);
    const [itens, setItem] = useState('');

    useEffect(() => {
        setTimeout(() => { setCount(count + 1) }, 1000);
        setItem(localStorage.getItem('itens'))

    });

    return (

        <nav id="menu_header">
            <div className="logo-linkPages">
                <Link to='/home'> <img src={Logo} alt='Logo' className='logo_menu' /> </Link>
                <ul id="links-list" className="links-list">
                    <li> <Link to='/home'>Home</Link> </li>
                    <li> <Link to='/produto'>Produtos</Link> </li>
                </ul>
            </div>
            <ul className="links-list">
                {itens.length !== 2 ?
                    <li>
                        <Link to='/compras'>
                            <HiShoppingBag id="newBag" />
                        </Link>
                    </li>
                    :
                    <li>
                        <Link to='/compras'>
                            <HiOutlineShoppingBag id="newBag" />
                        </Link>
                    </li>
                }

                <li className="sair_btn"> <Link to='/'>Sair</Link> </li>
            </ul>

        </nav>

    );
}
