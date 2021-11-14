import React, {useState, useEffect} from "react";
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Items from '../../Components/Items/index';
import Bin from '../../Images/IconCompras/bin.png';
import './styles.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

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
  Swal.fire({
    text: `Deseja retirar ${nome} da sacola ?`,
    icon: 'warning',
    showDenyButton: true,
    denyButtonText: 'Não',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        `${nome} retirado da sua sacola`,
        'success'
      )
      const newProducts = itens.filter(subjects => subjects.nome !== nome)

      localStorage.setItem('itens', JSON.stringify(newProducts))
      setItens(newProducts)
    }
  })

 }

 function endShop(){
  Swal.fire({
    title:'Compra finalizada',
    text: `Itens comprados`,
    icon: 'info',
    showDenyButton: true,
    denyButtonText: 'Não',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim'
  })
 }

 function setPlus(element){
   
}


  return (
    <div className="bag-container">
      <Header />
      <div classeName="tit">
      <p>|Sacola de Compras</p>
      <hr></hr>
      <h2>Valor</h2>  <h2>Total</h2> 
      </div>
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
      <button className="end-shop" onClick={()=>{endShop()}}>Finalizar Compra</button>

      </div>
      <Footer />
    </div>
  );
}
