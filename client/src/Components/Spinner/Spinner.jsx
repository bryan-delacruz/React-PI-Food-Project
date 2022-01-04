import React from "react";
import img from "./img/cargando.png";
import style from "./Spinner.module.css";

const Spinner = ({ height, container_spin }) => {
  return (
    <div
      className={container_spin === true ? style.container_spin : ""}
      style={{ height: height + "px" }}
    >
      <img src={img} className={style.spin} alt="spinner" />
    </div>
  );
};

export default Spinner;
