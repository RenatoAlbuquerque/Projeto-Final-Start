import { createContext, useState, useEffect} from "react";
import api from '../../Services/api';

export const ProductsContext = createContext({});

const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);
  const sliceData = (array) => {
    return array.slice(450, 460)
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await api.get('/products.json')
        const sliced = sliceData(data)
        setProducts([...sliced])
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <ProductsContext.Provider
      value={{
          products,
          setProducts,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider



