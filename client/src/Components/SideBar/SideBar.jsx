import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterRecipes } from "../../redux/actions";

import style from "./SideBar.module.css";

const SideBar = () => {
  let diets = useSelector((state) => state.diets);
  let filters_and_order = useSelector((state) => state.filters_and_order);
  const dispatch = useDispatch();

  const handleCheck = (e) => {
    let obj = { ...filters_and_order, [e.target.name]: e.target.checked };
    dispatch(filterRecipes(obj));
  };

  const retirarFiltros = (e) => {
    let obj = {
      ...filters_and_order,
      gluten_free: false,
      dairy_free: false,
      lacto_ovo_vegetarian: false,
      vegan: false,
      paleolithic: false,
      primal: false,
      pescatarian: false,
      fodmap_friendly: false,
      whole_30: false,
    };
    dispatch(filterRecipes(obj));
  };

  return (
    <aside className={style.aside}>
      <form className={style.dieta_filter}>
        <p className={style.dieta_title}>Diets</p>
        {diets.length > 0 &&
          diets.map((e, i) => {
            let prop = e.replaceAll(" ", "_");
            return (
              <div key={i} className={style.flex}>
                <input
                  className={style.input}
                  id={e}
                  type="checkbox"
                  name={prop}
                  checked={filters_and_order[prop]}
                  onChange={(e) => handleCheck(e)}
                />
                <label className={style.label} htmlFor={e}>
                  {e}
                </label>
              </div>
            );
          })}
      </form>
      <button
        type="button"
        className={style.aside_removeFilter}
        onClick={() => retirarFiltros()}
      >
        Deselect all diets
      </button>
      <div className={style.aside_block}></div>
    </aside>
  );
};

export default SideBar;
