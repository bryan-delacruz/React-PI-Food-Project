import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { orderRecipes } from "../../redux/actions";

import style from "./OrderBar.module.css";

const OrderBar = () => {
  let filters_and_order = useSelector((state) => state.filters_and_order);
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    let obj = {
      ...filters_and_order,
      byOrder: e.target.value,
    };
    dispatch(orderRecipes(obj));
  };

  return (
    <div>
      <div className={style.dieta_order}>
        <p className={style.order_label}>Sort by: </p>
        <select className={style.select} onChange={(e) => handleOrder(e)}>
          <option className={style.option} value="orderHigScore">
            Score: high to low
          </option>
          <option className={style.option} value="orderSmaScore">
            Score: low to high
          </option>
          <option className={style.option} value="orderAsc">
            From A to Z
          </option>
          <option className={style.option} value="orderDes">
            From Z to A
          </option>
        </select>
      </div>
    </div>
  );
};

export default OrderBar;
