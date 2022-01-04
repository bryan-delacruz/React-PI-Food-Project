import React from "react";

import style from "./DetailPage.module.css";

import FooterBar from "../../Components/FooterBar/FooterBar";
import RecipeDetail from "../../Components/RecipeDetail/RecipeDetail";
import NavBar from "../../Components/NavBar/NavBar";


const DetailPage = () => {
  return (
    <div className={style.detail_container}>
      <NavBar />
      <RecipeDetail />
      <FooterBar />
    </div>
  );
};

export default DetailPage;
