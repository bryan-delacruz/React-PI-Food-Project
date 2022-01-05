import React from "react";

import style from "./NavBar.module.css";
import find from "./svg/find.svg";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesByName } from "../../redux/actions";
import { useState } from "react";

const NavBar = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const filters_and_order = useSelector((state) => state.filters_and_order);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    let obj = {
      ...filters_and_order,
      byTitle: input,
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
            onChange={(e) => handleInputChange(e)}
            value={input}
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
