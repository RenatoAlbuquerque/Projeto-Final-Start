import React from 'react';
import Header from '../../Components/Header';
import Cards from '../../Components/Cards/Cards';
import Valores from '../../Components/Valores/valores';
import Navbar from '../../Components/Navbar';
import App from '../../Components/Carrossel/Carrossel';

import './index.css'

export default function Home() {
  return (
    <div>


      <Navbar/>
      <App/>
      <Cards/>
        <div className="publi">
            <h1>Start sua beleza, trazendo mais vida para seu dia a dia</h1>
        </div>
      <Valores/>

    </div>
  );
}
