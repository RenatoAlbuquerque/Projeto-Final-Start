import React from "react";
import Header from '../../Components/Header';
import ListaDeProdutos from "../../Components/ListaDeProdutos";
import Vantagens from "../../Components/Vantagens";
import ProductTypes from "../../Components/ProductTypes";


export default function Produto (){


  return (
    <div>
        <Header/>
        <ProductTypes/>
        <Vantagens/>
        <ListaDeProdutos/>
    </div>
  );
}
