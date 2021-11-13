import React, {useState, useEffect} from "react";
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Items from '../../Components/Items/index';
import Bin from '../../Images/IconCompras/bin.png';
import './styles.css';
export default function Compras() {
  const [itens, setItens ] = useState([]);
  const [user, setUser] = useState("");
  const [counter, setCounter] = useState(0);
  const [finalValue, setFinalValue] = useState();

  // useEffect(()=>{
  //     const produtos = localStorage.getItem('itens')
  //     setItens(produtos)

  //     const login = localStorage.getItem('login')
  //     setUser(login)
  // },[])

  
  useEffect(() => {
    let produtos = JSON.parse(localStorage.getItem('itens'))
    setItens(produtos)

    const login = localStorage.getItem('login')
    setUser(login)
  },[]);

 function deleteItem(nome){
  const newProducts = itens.filter(subjects => subjects.nome !== nome)

  localStorage.setItem('itens', JSON.stringify(newProducts))
  setItens(newProducts)
 }

 function setMinus(element){
   
 }

 function setPlus(element){
   
}


  return (
    <div className="bag-container">
      <Header />
      <h1>Sacola de Compras</h1>
      <div className="item-list">
      {
        itens.map( (element, key) => {
          return(
            <div className="item">
            <a onClick={()=>{deleteItem(element.nome)}}><img src={Bin} alt="Bin icon" className="bin-icon"/></a>
            <Items nome={element.nome} preco={element.preco} quant={element.quant} marca={element.marca} img={element.img}/>
            {/* <a onClick={()=>{}}>+</a>
            {element.quant}
            <a onClick={()=>{}}>-</a> */}
            {/* <p>Valor total</p>
            <h1>R$ {element.quant * element.preco}</h1> */}
            </div>
          )
        })
      }
      <button className="end-shop" onClick={()=>{alert("Compra finalizada")}}>Finalizar Compra</button>

      </div>
      <Footer />
    </div>
  );
}
