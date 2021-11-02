import './style.scss';
import batomIcon from '../../Images/IconsProductTypes/batom.png';
import blushIcon from '../../Images/IconsProductTypes/blush.png';
import bronzerIcon from '../../Images/IconsProductTypes/bronzer.png';
import esmalteIcon from '../../Images/IconsProductTypes/esmalte.png';
import delineadorIcon from '../../Images/IconsProductTypes/delineador.png';
import rimelIcon from '../../Images/IconsProductTypes/rimel.png';
import React, { useState} from "react";
import api from '../../Services/api';

export default function ProductTypes({updateStateOnType}){
    const [type, setType] = useState();

    const handleType=(e)=>{
        e.preventDefault();
        const inputType = e.target.value
        
        api.get(`/products.json?product_type=${inputType}`)
        .then((response) =>  setType(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
        });
        filterByType(type)
    }

    const filterByType = (array)=>{
        const slicedType = array.slice(0,45)
        updateStateOnType(slicedType)
        console.log(slicedType)
    }



    return(
        <>
            <div className="lineGradientUP"></div>
            <div className="product"> 
                <div className="types">
                    <div className="lipstick" onClick={handleType}> 
                        <img src={batomIcon} alt="batom-icon"/>
                        <button  value="lipstick">Batom</button>
                    </div>
                    <div className="blush" onClick={handleType}>
                        <img src={blushIcon} alt="blush-icon"/>
                        <button value="blush">Blush</button>
                    </div>
                    <div className="bronzer" onClick={handleType}>
                        <img src={bronzerIcon} alt="bronzer-icon"/>
                        <button value="bronzer">Bronzer</button>
                    </div>
                    <div className="nail-polish" onClick={handleType}>
                        <img src={esmalteIcon} alt="esmalte-icon"/>
                        <button value="nail_polish">Esmalte</button>
                    </div>
                    <div className="eyebrow" onClick={handleType}>
                        <img src={delineadorIcon} alt="delineador-icon"/>
                        <button value="eyebrow">Delineador</button>
                    </div>
                    <div className="mascara" onClick={handleType}>
                        <img src={rimelIcon} alt="rimel-icon"/>
                        <button value="mascara">Rímel</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}