import React from "react";
import { Link } from "react-router-dom";

import style from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <header className={style.header}>
      <div className={style.hero_text_box}>
        <h1>Page Not Found</h1>
        <Link to="/">
          <button className={`${style.btn} ${style.btn_full}`}>
            Go To Landing Page
          </button>
        </Link>
      </div>
    </header>
  );
};

export default NotFoundPage;
