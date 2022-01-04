import React from "react";
import style from "./FooterBar.module.css";

const FooterBar = () => {
  return (
    <footer className={style.home_footer}>
      <div className={style.home_footer_div}>
        <p>Realizado por: Bryan De La Cruz</p>
      </div>
    </footer>
  );
};

export default FooterBar;
