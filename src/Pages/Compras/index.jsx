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
function ItemComponent(props){
  if(itens){
    return(
      <div className="item-list">
      {
        itens.map( (element, key) => {
          return(
            <div className="item">
            <a onClick={()=>{deleteItem(element.nome)}}><img src={Bin} alt="Bin icon" className="bin-icon"/></a>
            <Items nome={element.nome} preco={element.preco} quant={element.quant} marca={element.marca} img={element.img}/>
  
            </div>
          )
        })
      }
      <button className="end-shop" onClick={()=>{endShop()}}>Finalizar Compra</button>
  
      </div>
    )
  }else{
    return(
    <div><h1 className="message">Sacola Vazia</h1></div>
    )
  }

}
  
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
    titleText: "Itens comprados",
    html: showItens(),
    icon: 'info',
    width: 600,
    showDenyButton: true,
    denyButtonText: 'Não',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Sim'
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Sua compra foi finalizada', '', 'info')
      localStorage.removeItem("itens");
      setItens()
    }
  })

 }

 function showItens(){
  let produtos = JSON.parse(localStorage.getItem('itens'))
  var string = ''
  var finalV = 0
  for(var i in produtos){
    string += produtos[i].nome + "  " + produtos[i].quant + " un. R$" + produtos[i].preco * produtos[i].quant +'<br>'
    finalV += produtos[i].preco * produtos[i].quant
  }

  string += "<b>Valor da Compra : R$ " + finalV + "</b><br>"
  string += "Compra efetuada pelo usuário \"<b>" + user + "</b>\"<br><br><br>"
  string += "Deseja gerar o PDF da compra ?"
  console.log(string)
  return string
}


  return (
    <div className="bag-container">
      <Header />
      {/* <h1>Sacola de Compras</h1> */}
      { ItemComponent()}
      {/* <div className="item-list">
      {
        itens.map( (element, key) => {
          return(
            <div className="item">
            <a onClick={()=>{deleteItem(element.nome)}}><img src={Bin} alt="Bin icon" className="bin-icon"/></a>
            <Items nome={element.nome} preco={element.preco} quant={element.quant} marca={element.marca} img={element.img}/>

            </div>
          )
        })
      }
      <button className="end-shop" onClick={()=>{endShop()}}>Finalizar Compra</button>

      </div> */}
      <Footer />
    </div>
  );
}
