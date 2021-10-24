import React from "react";
import Header from '../../Components/Header';
import ListaDeProdutos from "../../Components/ListaDeProdutos";
import Vantagens from "../../Components/Vantagens";
import FilterList from "../../Components/FilterList";


export default function Produto (){


  return (
    <div>
        <Header/>
        <Vantagens/>
        <FilterList/>
        <ListaDeProdutos/>
    </div>
  );
}
