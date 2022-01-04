import React from "react";

import style from "./NavCardsContainer.module.css";

import OrderBar from "../OrderBar/OrderBar";
import PaginationBar from "../PaginationBar/PaginationBar";

const NavCardsContainer = () => {
  return (
    <div className={style.nav_cards_container}>
      <OrderBar />
      <PaginationBar />
    </div>
  );
};

export default NavCardsContainer;
