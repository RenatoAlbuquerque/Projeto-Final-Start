import React from 'react';
import Header from '../../Components/Header';
import Cards from '../../Components/Cards/Cards';
import Valores from '../../Components/Valores/valores';

import './index.css'

export default function Home (){
  return (
    <div>
        <Cards/>
        {/*<div className="publi">
            <h1>Start sua beleza, trazendo mais vida para seu dia a dia</h1>
        </div>*/}
        <Valores/>
    </div>
  );
}
