import React from 'react';
import "./style.scss"

const PaginationSelector = ({ itensPerPage, setItensPerPage }) => {
  return (
    <div className="pages">
      <p>Quantidade de itens:</p>
      <div className="itens-per-pages">
        <select
          value={itensPerPage}
          onChange={(e) =>
            setItensPerPage(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>
    </div>
  )
}

export default PaginationSelector