import React from "react";
import style from "./PaginationButton.module.css";

const PaginationButton = ({ number, currentPage, changeCurrentPage }) => {
  return (
    <button
      key={number}
      value={number}
      className={`${
        number === currentPage ? `${style.button_active}` : `${style.button}`
      }`}
      onClick={(e) => changeCurrentPage(e)}
    >
      {number}
    </button>
  );
};

export default PaginationButton;
