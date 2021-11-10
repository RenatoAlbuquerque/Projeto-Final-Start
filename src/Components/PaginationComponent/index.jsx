import React from 'react';
import "./style.scss"

const PaginationComponent = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <div className="quant-pages">
      {Array.from(Array(pages), (item, index) => {
        return (
          <button key={index}
            style={index === currentPage ? {
              backgroundColor: "#f3aca354",
              color: "#4e4e4e"
            } : null}
            className="paginationButton"
            value={index}
            onClick={(e) =>
              setCurrentPage(Number(e.target.value))}>
            {index + 1}
          </button>
        )
      })}
    </div >
  )
}

export default PaginationComponent;