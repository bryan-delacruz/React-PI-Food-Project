import React from "react";

import github from "./svg/github.svg";

import style from "./FooterBar.module.css";

const FooterBar = () => {
  return (
    <footer className={style.home_footer}>
      <div className={style.home_footer_div}>
        <p>
          Made by <img src={github} alt="github-logo" />
          <a
            href="https://github.com/bryan-delacruz/pi-project-food"
            style={{ textDecoration: "none", color: "#ffff" }}
          >
            {" "}
            bryan-delacruz
          </a>
        </p>
      </div>
    </footer>
  );
};

export default FooterBar;
