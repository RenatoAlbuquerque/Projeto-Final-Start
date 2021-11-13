import React, { useEffect, useState } from 'react';
import bag3 from '../../Images/IconCompras/bag3.png';
import bag2 from '../../Images/IconCompras/bag2.png';

export default function Bag(props) {
    const [bag, setBag] = useState()

    useEffect(() => {
        const itens = localStorage.getItem('itens')
        if (!itens) {
            setBag(bag3)
        } else {
            setBag(bag2)
        }
        console.log('asdas')
    })
    return (
        <div>
            <img src={bag} />
        </div>
    );
}