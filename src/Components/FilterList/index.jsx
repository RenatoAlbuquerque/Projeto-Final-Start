import React, { useState, useContext } from "react";
import { ProductsContext } from '../providers/products';
import './style.scss';
import { AiFillStar, AiOutlineStar, AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import api from '../../Services/api';


export default function FilterList() {
  const products = useContext(ProductsContext);
  const [menuBrand, setMenuBrand] = useState(false);

  const MenuToogleBrand = () => {
    setMenuBrand(!menuBrand)
  }

  const sliceBrand = (array) => {
    const sliced = array.slice(0, 45)
    products.setProducts(sliced)
  }

  const getProductsByBrand = async (brandName) => {
    try {
      const { data } = await api.get(`/products.json?brand=${brandName}`)
      sliceBrand(data)
    } catch (error) {
      console.log(error)
    }
  }

  const filterByMinPrice = () => {
    const sortedArray = products.products.sort((a, b) => {
      if (parseInt(a.price) < parseInt(b.price)) {
        return -1;
      }
      else if (parseInt(a.price) > parseInt(b.price)) {
        return 1;
      }
      return 0;
    })
    products.setProducts([...sortedArray])
  }

  const filterByMaxPrice = () => {
    const sortedArray = products.products.sort((a, b) => {
      if (parseInt(a.price) > parseInt(b.price)) {
        return -1;
      }
      else if (parseInt(a.price) < parseInt(b.price)) {
        return 1;
      }
      return 0;
    })
    products.setProducts([...sortedArray])
  }

  const filterByMaxRating = () => {
    const sortedArray = products.products.sort((a, b) => {

      if (a.rating !== null && b.rating !== null) {
        if (parseInt(a.rating) > parseInt(b.rating)) {
          return -1;
        } else if (parseInt(a.rating) < parseInt(b.rating)) {
          return 1;
        }
        return 0;
      } else {
        return 0
      }
    })
    products.setProducts([...sortedArray])
  }

  const filterByMinRating = () => {
    const sortedArray = products.products.sort((a, b) => {
      if (a.rating !== null && b.rating !== null) {
        if (parseInt(a.rating) < parseInt(b.rating)) {
          return -1;
        } else if (parseInt(a.rating) > parseInt(b.rating)) {
          return 1;
        }
        return 0;
      } else {
        return 0
      }
    })
    products.setProducts([...sortedArray])
  }

  return (
    <div className="filter">
      <div className="filter-list">
        <div className="filter-brand">
          <div className="brand-btn">
            <button
              id="btnBrand"
              onClick={MenuToogleBrand}
            >
              Por Marcas
            </button>
          </div>
          <div className={menuBrand ? "modalGlobalBrand" : "modalNone"}>
            <div className="modal-brand">
              <button
                id="btnFilterBrand"
                onClick={() =>
                  getProductsByBrand("benefit")}
              >
                Benefit
              </button>
              <button
                id="btnFilterBrand"
                onClick={() =>
                  getProductsByBrand("clinique")}
              >
                Clinique
              </button>
              <button
                id="btnFilterBrand"
                onClick={() =>
                  getProductsByBrand("covergirl")}
              >
                Covergirl
              </button>
              <button
                id="btnFilterBrand"
                onClick={() =>
                  getProductsByBrand("dior")}
              >
                Dior
              </button>
              <button
                id="btnFilterBrand"
                onClick={() =>
                  getProductsByBrand("l'oreal")}
              >
                L'oreal
              </button>
              <button
                id="btnFilterBrand"
                onClick={() =>
                  getProductsByBrand("maybelline")}
              >
                Maybelline
              </button>
              <button
                id="btnFilterBrand"
                onClick={() => getProductsByBrand("nyx")}
              >
                Nyx
              </button>
              <button
                id="btnFilterBrand"
                onClick={() =>
                  getProductsByBrand("revlon")}
              >
                Revlon
              </button>
            </div>
          </div>
        </div>
        <div className="filter-price_rating">
          <button
            id="btnFilterPrice_Rating"
            onClick={filterByMinPrice}
          >
            Menor Pre??o
            <AiOutlineCaretDown />
          </button>
          <button
            id="btnFilterPrice_Rating"
            onClick={filterByMaxPrice}
          >
            Maior Pre??o <AiOutlineCaretUp />
          </button>
          <button
            id="btnFilterPrice_Rating"
            onClick={filterByMaxRating}
          >
            Maior Avalia????o
            <AiFillStar />
          </button>
          <button
            id="btnFilterPrice_Rating"
            onClick={filterByMinRating}
          >
            Menor Avalia????o <AiOutlineStar />
          </button>
        </div>
      </div>
    </div>
  );
}