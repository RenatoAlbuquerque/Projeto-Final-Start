import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import bag3 from '../../Images/IconCompras/bag3.png';
import bag2 from '../../Images/IconCompras/bag2.png';
import './style.css';
import Bag from '../Bag/Bag'
const delay = 5;

export default function Navbar(props) {
    const [bag, setBag] = useState()
    const [show, setShow] = useState(false);


    const [value, setValue] = useState('');
    const [count, setCount] = useState(-1);
  
    useEffect(() => { 
        setTimeout(() => {setCount(count + 1)}, 1000);

        
        const itens = localStorage.getItem('itens')
        console.log(typeof itens)
        if(!itens || itens == '[]'){
            setBag(bag3)
        }else{
            setBag(bag2)
        }
    });
    
    const onChange = ({ target }) => setValue(target.value);

    useEffect(() =>{

        const itens = localStorage.getItem('itens')
        if(!itens){
            setBag(bag3)
        }else{
            setBag(bag2)
        }
    },[])
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
                <li>
                    <Link to='/compras'><img src={bag} alt='Bag' className='bagIcon'/></Link>
                </li>
            </ul>
        </nav>
    );
}
