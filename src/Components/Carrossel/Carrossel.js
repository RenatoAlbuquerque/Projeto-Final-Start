import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Style.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

export default function App() {
    
  const [items] = useState([
    <img src="https://claudia.abril.com.br/wp-content/uploads/2020/01/gatinhos-41028-1.jpg"></img> , 
    <img src="https://claudia.abril.com.br/wp-content/uploads/2020/01/gatinhos-41028-1.jpg"></img> ,
    <img src="https://claudia.abril.com.br/wp-content/uploads/2020/01/gatinhos-41028-1.jpg"></img> , 
    <img src="https://claudia.abril.com.br/wp-content/uploads/2020/01/gatinhos-41028-1.jpg"></img> , 
    <img src="https://claudia.abril.com.br/wp-content/uploads/2020/01/gatinhos-41028-1.jpg"></img> , 
    <img src="https://claudia.abril.com.br/wp-content/uploads/2020/01/gatinhos-41028-1.jpg"></img> , 
    <img src="https://claudia.abril.com.br/wp-content/uploads/2020/01/gatinhos-41028-1.jpg"></img> , 
    <img src="https://claudia.abril.com.br/wp-content/uploads/2020/01/gatinhos-41028-1.jpg"></img>]);

  return (
    <div className="App">

      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Item key={item}> {item} </Item>
          ))}
        </Carousel>
      </div>

    </div>
  );
}