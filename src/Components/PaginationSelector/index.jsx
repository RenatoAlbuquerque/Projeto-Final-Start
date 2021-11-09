import React from 'react';
import "./style.scss"

const PaginationSelector = ({ itensPerPage, setItensPerPage }) => {
  return (
    <div className="pages">
      <p id="quantPages">Quantidade de itens:</p>
      <div className="itens-per-pages">
        <select
          id="selectPages"
          value={itensPerPage}
          onChange={(e) =>
            setItensPerPage(Number(e.target.value))}>
          <option id="optionPages" value={5}>5</option>
          <option id="optionPages" value={10}>10</option>
          <option id="optionPages" value={15}>15</option>
        </select>
      </div>
    </div>
  )
}

export default PaginationSelector