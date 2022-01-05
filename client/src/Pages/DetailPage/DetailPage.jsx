import React from "react";

import NavBar from "../../Components/NavBar/NavBar";
import RecipeDetail from "../../Components/RecipeDetail/RecipeDetail";
import FooterBar from "../../Components/FooterBar/FooterBar";

import style from "./DetailPage.module.css";

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
