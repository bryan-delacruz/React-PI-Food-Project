import React from "react";

import { Link } from "react-router-dom";

import style from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <header className={style.header}>
      <div className={style.hero_text_box}>
        <h1>Goodbye junk food.</h1>
        <Link to="/home">
          <button className={`${style.btn} ${style.btn_full}`}>Home</button>
        </Link>
      </div>
    </header>
  );
};

export default LandingPage;
