import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { orderRecipes } from "../../redux/actions";
import style from "./OrderBar.module.css";

const OrderBar = () => {
  const dispatch = useDispatch();
  let filters_and_order = useSelector((state) => state.filters_and_order);

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
        <p className={style.order_label}>Ordenar por: </p>
        <select
          className={style.select}
          name="order"
          id="order"
          onChange={(e) => handleOrder(e)}
        >
          <option className={style.option} value="orderHigScore">
            De Mayor a Menor puntuación
          </option>
          <option className={style.option} value="orderSmaScore">
            De Menor a Mayor puntuación
          </option>
          <option className={style.option} value="orderAsc">
            De A a la Z
          </option>
          <option className={style.option} value="orderDes">
            De Z a la A
          </option>
        </select>
      </div>
    </div>
  );
};

export default OrderBar;
