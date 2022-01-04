import React from "react";

import style from "./HomePage.module.css";
import NavBar from "../../Components/NavBar/NavBar";
import SideBar from "../../Components/SideBar/SideBar";
import NavCardsContainer from "../../Components/NavCardsContainer/NavCardsContainer";
import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import PaginationBar from "../../Components/PaginationBar/PaginationBar";
import FooterBar from "../../Components/FooterBar/FooterBar";

const HomePage = () => {
  return (
    <div className={`${style.home_container}`}>
      <NavBar />
      <main className={`${style.home_main} ${style.flex}`}>
        <SideBar />
        <div className={`${style.home_pag_card}`}>
          <NavCardsContainer />
          <CardsContainer />
          <div className={style.home_footer_cards}>
            <PaginationBar />
          </div>
        </div>
      </main>
      <FooterBar />
    </div>
  );
};

export default HomePage;
