import React from "react";
import style from "./Alert.module.css";

const Alert = ({ text, width, warning }) => {
  return (
    <li
      className={`${warning ? style.warning : style.alert}`}
      style={{ width: width + "px" }}
    >
      <p className={style.li_data}>{text}</p>
    </li>
  );
};

export default Alert;
