import React, { useContext, useState } from "react";
import { ProductsContext } from '../providers/products';
import './style.scss';
import FilterList from '../FilterList';
import Modal from "../Modal/Modal";
import Content from "../Modal/Content";
import ProductTypes from '../ProductTypes';
import Benefits from "../../Components/Benefits";

export default function ListaDeProdutos() {
  const products = useContext(ProductsContext);
  const [modalOn, setModalOn] = useState(false);
  const [positionCard, setPositionCard] = useState('');



  const sliceColors = (array) => {
    if (array.length > 7) {
      let colorsArray = array.slice(0, 14)
      return (
        <>
          {colorsArray.map((color, index) => (
            <div className="CardColor"
              key={index}
              color={color.hex_value}
              style={{ backgroundColor: `${(color.hex_value)}` }}
            >
            </div>
          ))}
        </>
      )
    } else {
      return (
        <>
          {array.map((color, index) => (
            <div className="CardColor"
              key={index}
              color={color.hex_value}
              style={{ backgroundColor: `${(color.hex_value)}` }}
            >
            </div>
          ))}
        </>
      )
    }
  }


  const filteredCard = products.products[positionCard];

  return (
    <div>
      <ProductTypes />
      <Benefits />
      <FilterList />
      <div className="GlobalStyle">
        <div className="Global">
          {products.products.length ?
            products.products.map((product, index) => (
              <div className="Card" key={index}>
                <div className="CardImage">
                  <img src={product.api_featured_image} alt={product.name}></img>
                </div>
                <div className="CardName">
                  {product.name}
                </div>
                <div className="CardBrand">
                  Marca: {product.brand}
                </div>
                <div className="CardCategory">
                  Tipo: {product.category}
                </div>
                <div className="CardPrice">
                  Preço: R${product.price}
                </div>
                <div className="CardRating">
                  Avaliação: {product.rating}
                </div>
                <div className="CardGapDetail">
                  <div className="CardFooter">
                    <div className="CardLocalColor">
                      {sliceColors(product.product_colors)}
                    </div>
                  </div>
                  <div className="CardDetail" >
                    <button onClick={() => { setPositionCard(index); setModalOn(true) }}> + Detalhes</button>
                  </div>
                </div>
              </div>
            ))
            :
            <div className="loading">
              <input type="checkbox" id="check" />
              <label>
                <div className="check-icon"></div>
              </label>
            </div>
          }

        </div>
      </div>
      {modalOn ?
        <div>
          <Modal onClose={() => setModalOn(false)}>
            <Content
              img={filteredCard.api_featured_image}
              name={filteredCard.name}
              tipo={filteredCard.category}
              preco={filteredCard.price}
              marca={filteredCard.brand}
              desc={filteredCard.description}
              cor={sliceColors(filteredCard.product_colors)}       
            />
          </Modal>
        </div>
        : null}
    </div>
  );
}