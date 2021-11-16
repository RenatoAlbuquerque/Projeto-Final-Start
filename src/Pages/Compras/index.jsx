import React, {useState, useEffect} from "react";
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Items from '../../Components/Items/index';
import Bin from '../../Images/IconCompras/bin.png';
import './styles.css';
import Swal from 'sweetalert2'
import jsPDF from 'jspdf' 

export default function Compras() {
  const [itens, setItens ] = useState([]);
  const [user, setUser] = useState("");

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
            <div className="item" key={key}>
            <a className="bin-content"><img src={Bin} alt="Bin icon" className="bin-icon" onClick={()=>{deleteItem(element.nome)}} /></a>
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
        `${nome} retirado da sua sacola`,
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
      geradorPDF(user,showItens())
      localStorage.removeItem("itens");
      setItens()
    } else if (result.isDenied) {
      Swal.fire('Sua compra foi finalizada', '', 'info')
      localStorage.removeItem("itens");
      setItens()
    }
  })

 }

 function geradorPDF(){
  var doc = new jsPDF('landscape', 'mm', [230,230]);

  doc.setFont('arial');
  doc.text(20, 30, showItensPDF());

  var utc = new Date().toJSON().slice(0,10)
  doc.save(utc + "_"+user+"_"+".pdf");

}

function showItensPDF(){
  let produtos = JSON.parse(localStorage.getItem('itens'))
  var string = ''
  var finalV = 0
  for(var i in produtos){
    string += produtos[i].nome + " " + produtos[i].quant + " un. R$" + produtos[i].preco * produtos[i].quant +'\n \n'
    finalV += produtos[i].preco * produtos[i].quant
  }

  string += "\n\n\nValor da Compra : R$ " + finalV + "\n \n"
  string += "Compra efetuada pelo usuário \"" + user + "\" \n \n"
  return string
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
  return string
}


  return (
    <div className="bag-container">
      <Header />
      <div classeName="tit">
        <p className="tit-p">Sacola de Compras</p>
        <hr className="tit-hr"></hr>
        <div className="title-bars">
        <h2 className="marca">Item/Marca</h2> <h2 className="valor">Valor</h2>  <h2 className="quant">Quant.</h2><h2 className="total">Total</h2> 
        </div>
      </div>
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
