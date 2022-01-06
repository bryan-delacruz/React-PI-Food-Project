import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getRecipes, setIsModalOpen } from "../../redux/actions";

import style from "./Modal.module.css";

const Modal = ({ setForm, title, message }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const onClick = (e) => {
    setForm({
      title: "",
      summary: "",
      spoonacularScore: "",
      healthScore: "",
      diets: [],
      steps: [],
    });
    dispatch(getRecipes());
    dispatch(setIsModalOpen(false));
    if (e.target.name === "home") {
      navigate("/home");
    }
  };
  return (
    <div className={style.modal}>
      <div className={style.overlay}></div>
      <div className={style.modal_content}>
        <h2>{title}</h2>
        <p>{message}</p>
        <div className={style.flex}>
          <button name="create" onClick={(e) => onClick(e)}>
            Create a new recipe
          </button>
          <button name="home" onClick={(e) => onClick(e)}>
            Go home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
