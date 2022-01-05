import React from "react";
import { useSelector, useDispatch } from "react-redux";

import arrowLeft from "./svg/arrowLeft.svg";
import arrowRight from "./svg/arrowRight.svg";
import PaginationButton from "../PaginationButton/PaginationButton";

import { set_current_items_by_page } from "../../redux/actions";

import style from "./PaginationBar.module.css";

const PaginationBar = () => {
  let currentPage = useSelector((state) => state.currentPage);
  let itemsPerPage = useSelector((state) => state.itemsPerPage);
  let currentRecipes = useSelector((state) => state.currentRecipes);
  const dispatch = useDispatch();

  let pageNumbers = [];
  if (currentRecipes.length <= itemsPerPage) {
    pageNumbers.push(1);
  } else {
    for (let i = 1; i <= Math.ceil(currentRecipes.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  const prevPage = () => {
    let number = +currentPage - 1;
    if (number < 1) {
      return null;
    }
    dispatch(set_current_items_by_page(number));
  };

  const nextPage = () => {
    let number = +currentPage + 1;
    if (number > pageNumbers.length) {
      return null;
    }
    dispatch(set_current_items_by_page(number));
  };

  const changeCurrentPage = (e) => {
    let number = +e.target.value;
    dispatch(set_current_items_by_page(number));
  };

  const handlePageButton = (e) => {
    e.preventDefault();
    dispatch(set_current_items_by_page(+e.target.inputNumberPage.value));
  };
  return (
    <nav className={style.nav_pagination}>
      <button className={style.button_arrow} onClick={(e) => prevPage(e)}>
        <img src={arrowLeft} alt="arrow-left" />
      </button>
      {pageNumbers.map((number) => {
        switch (true) {
          case pageNumbers.length === 1:
            return (
              <span key={number}>
                <PaginationButton
                  number={number}
                  currentPage={currentPage}
                  changeCurrentPage={changeCurrentPage}
                />
              </span>
            );
          case pageNumbers.length === 2:
            if (currentPage === 1 && number === 1) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 2 && number === 2) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            return null;
          case pageNumbers.length === 3:
            if (currentPage === 1 && number === 1) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 2}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 2 && number === 2) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 3 && number === 3) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number - 2}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            return null;
          case pageNumbers.length === 4:
            if (currentPage === 1 && number === 1) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <button className={style.space}>...</button>
                  <PaginationButton
                    number={number + 3}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 2 && number === 2) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 2}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 3 && number === 3) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number - 2}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 4 && number === 4) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number - 3}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <button className={style.space}>...</button>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            return null;
          case pageNumbers.length === 5:
            if (currentPage === 1 && number === 1) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <button className={style.space}>...</button>
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 2 && number === 2) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <button className={style.space}>...</button>
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 3 && number === 3) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 4 && number === 4) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <button className={style.space}>...</button>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 5 && number === 5) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <button className={style.space}>...</button>
                  <PaginationButton
                    number={pageNumbers.length - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            return null;
          case pageNumbers.length === 6:
            if (currentPage === 1 && number === 1) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <button className={style.space}>...</button>
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 2 && number === 2) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <button className={style.space}>...</button>
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 3 && number === 3) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <button className={style.space}>...</button>
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 4 && number === 4) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <button className={style.space}>...</button>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 5 && number === 5) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <button className={style.space}>...</button>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 6 && number === 6) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <button className={style.space}>...</button>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            return null;
          case pageNumbers.length >= 7:
            if (currentPage === 1 && number === 1) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <button className={style.space}>...</button>
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 2 && number === 2) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <button className={style.space}>...</button>
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (currentPage === 3 && number === 3) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <button className={style.space}>...</button>
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (
              currentPage >= 4 &&
              currentPage <= pageNumbers.length - 3 &&
              currentPage === number
            ) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <button className={style.space}>...</button>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <button className={style.space}>...</button>
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (
              currentPage === pageNumbers.length - 2 &&
              number === pageNumbers.length - 2
            ) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <button className={style.space}>...</button>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={pageNumbers.length}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (
              currentPage === pageNumbers.length - 1 &&
              number === pageNumbers.length - 1
            ) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <button className={style.space}>...</button>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number + 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            if (
              currentPage === pageNumbers.length &&
              number === pageNumbers.length
            ) {
              return (
                <span key={number}>
                  <PaginationButton
                    number={1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <button className={style.space}>...</button>
                  <PaginationButton
                    number={number - 1}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                  <PaginationButton
                    number={number}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                </span>
              );
            }
            return null;
          default:
            return null;
        }
      })}
      <button className={style.button_arrow} onClick={() => nextPage()}>
        <img src={arrowRight} alt="arrow-right" />
      </button>
      <div className={style.flex}>
        <form action="submit" onSubmit={(e) => handlePageButton(e)}>
          <input
            type="number"
            name="inputNumberPage"
            className={style.nav_input}
            min="1"
            max={pageNumbers.length}
          />
          <button className={style.nav_button} type="submit">
            Go
          </button>
        </form>
      </div>
    </nav>
  );
};

export default PaginationBar;
