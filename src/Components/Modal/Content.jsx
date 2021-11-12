import React, { useState, useEffect } from 'react';

export default function Content(props) {
    const [num, setNum] = useState(1);

    function sub() {
        if (num > 1) {
            setNum(num - 1);
        }
    }

    function addToSacola(nome, preco, quant, total) {
        const produto = { nome, preco, quant }
        // console.log(produto)
        let produtos = JSON.parse(localStorage.getItem('itens'))
        if(produtos.length === 0) {
            produtos.push(produto)
            localStorage.setItem('itens', JSON.stringify(produtos))
        }else{
            const object = foundItem(produtos, produto)
            if(object.count == 0){
                let produtos = JSON.parse(localStorage.getItem('itens'))
                produtos.push(produto)
                localStorage.setItem('itens', JSON.stringify(produtos))
            }else{
                //Preparar um modal para a confirmação de uma compra a mais
                let produtos = JSON.parse(localStorage.getItem('itens'))
                console.log(produtos[object.indexItem].quant)
                produtos[object.indexItem].quant = produtos[object.indexItem].quant + produto.quant
                localStorage.setItem('itens', JSON.stringify(produtos))
            }
        }
        // console.log(produtos)

    }

    function foundItem(array, item){
        var count = 0
        var indexItem = 0
        for (let index = 0; index < array.length; index++) {
            if(array[index].nome === item.nome){
                count += 1
                var indexItem = index
            }else{
                
            }

        }

        return {count, indexItem}
        // console.log(array)
    }
    useEffect(() => {
        const val = localStorage.getItem('itens')
        if (!val) {
            const itens = [];
            localStorage.setItem('itens', JSON.stringify(itens))
        }
    }, [])

    return (
        <div id="content">
            <h3>{props.name}</h3>
            <div className="container">
                <div className="img-product">
                    <img src={props.img} alt="img" />
                </div>

                <div id="item">
                    <ul className="details">
                        <li><b>Marca:</b> {props.marca}</li>
                        <li><b>Tipo:</b> {props.tipo}</li>
                        <li><b>Preço:</b> R$ {props.preco}</li>
                        <li><b>Cores:</b><span className="cor">{props.cor}</span></li>
                    </ul>
                    <div className="btns">
                        <p className="text-quantidade">
                            <b>Quant:</b>
                        </p>
                        <button className="btn-calculo" onClick={() => setNum(num + 1)}>+</button>
                        <p className="quantCompras">{num}</p>
                        <button className="btn-calculo" onClick={sub}>-</button>
                    </div>
                    <button className="btn-comprar" type="button" onClick={() => {
                        addToSacola(props.name, props.preco, num, num * props.preco);
                    }}>Comprar</button>
                </div>
            </div>
        </div>
    );
}
