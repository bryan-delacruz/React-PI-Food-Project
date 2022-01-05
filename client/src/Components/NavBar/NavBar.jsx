import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { getRecipesByName } from "../../redux/actions";

import style from "./NavBar.module.css";
import find from "./svg/find.svg";

const NavBar = () => {
  const filters_and_order = useSelector((state) => state.filters_and_order);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let obj = {
      ...filters_and_order,
      byTitle: e.target.title.value,
    };
    dispatch(getRecipesByName(obj));
    navigate("/home");
  };

  return (
    <nav className={style.nav}>
      <div className={style.nav_container}>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <button className={style.button}>Home</button>
        </Link>
        <Link to="/createRecipe" style={{ textDecoration: "none" }}>
          <button className={style.button}>Crear Receta</button>
        </Link>
        <form className={style.nav_form} onSubmit={(e) => handleOnSubmit(e)}>
          <input
            autoComplete="off"
            name="title"
            type="text"
            className={style.nav_input}
            placeholder="Ingresar receta"
          />
          <button type="submit" className={style.nav_button}>
            <img className={style.nav_img} src={find} alt="find-icon" />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
