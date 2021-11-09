import React, { useContext, useState, useEffect } from "react";
import { ProductsContext } from '../providers/products';
import './style.scss';
import FilterList from '../FilterList';
import Modal from "../modal/Modal";
import Content from "../modal/Content";
import ProductTypes from '../ProductTypes';
import Benefits from "../../Components/Benefits";
import PaginationComponent from "../../Components/PaginationComponent";
import PaginationSelector from "../../Components/PaginationSelector";

export default function ListaDeProdutos() {
  const products = useContext(ProductsContext);
  const [modalOn, setModalOn] = useState(false);
  const [positionCard, setPositionCard] = useState('');

  const [itensPerPage, setItensPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(products.products.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = products.products.slice(startIndex, endIndex);

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

  useEffect(() => {
    setCurrentPage(0)
  }, [itensPerPage])

  const filteredCard = products.products[positionCard];

  return (
    <div>
      <ProductTypes />
      <Benefits />
      <FilterList />
      {products.products.length ?
        <PaginationSelector itensPerPage={itensPerPage} setItensPerPage={setItensPerPage} />
        : null}

      <div className="GlobalStyleProduct">
        <div className="GlobalProduct">
          {products.products.length ?
            currentItens.map((product, index) => (
              <div className="CardProduct" key={index}>
                <div className="CardImage">
                  <img
                    src={product.api_featured_image}
                    alt={product.name}>
                  </img>
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
                  Preço: R${product.price === "0.0" ?
                    product.price = parseFloat(Math.random() * (80 - 1) + 1).toFixed(2)
                    :
                    product.price}
                </div>
                <div className="CardRating">
                  Avaliação:{product.rating === null ?
                    product.rating = parseInt(Math.random() * (5 - 1) + 1).toFixed(1)
                    :
                    product.rating}
                </div>
                <div className="CardGapDetail">
                  <div className="CardFooter">
                    <div className="CardLocalColor">
                      {sliceColors(product.product_colors)}
                    </div>
                  </div>
                  <div className="CardDetail" >
                    <button
                      id="btnOpenModalDetail"
                      onClick={() => { setPositionCard(index); setModalOn(true) }}
                    >
                      + Detalhes
                    </button>
                  </div>
                </div>
              </div>
            ))
            :
            <div className="loading">
              <input type="checkbox" id="check" />
              <label id="checkLoading">
                <div className="check-icon"></div>
              </label>
            </div>
          }
        </div>
      </div>
      <div className="pagination">
        {products.products.length ?
          <PaginationComponent
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage} />
          :
          null}
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