import React from "react";
import style from "./CreateRecipePage.module.css";

import NavBar from "./../../Components/NavBar/NavBar";
import FooterBar from "./../../Components/FooterBar/FooterBar";
import FormCreateRecipe from "./../../Components/FormCreateRecipe/FormCreateRecipe";

const CreateRecipePage = () => {
  return (
    <div className={style.createRecipe_container}>
      <NavBar />
      <FormCreateRecipe />
      <FooterBar />
    </div>
  );
};

export default CreateRecipePage;
