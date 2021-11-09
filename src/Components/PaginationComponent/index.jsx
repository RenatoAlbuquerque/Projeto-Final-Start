import React from 'react';
import "./style.scss"

const PaginationComponent = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <div className="quant-pages">
      {Array.from(Array(pages), (item, index) => {
        return (
          <button key={index}
            style={index === currentPage ? {
              backgroundColor: "rgba(212, 114, 143, 1)",
              color: "#FBFBFB"
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