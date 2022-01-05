import React from "react";
import { useSelector } from "react-redux";

import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";

import style from "./CardsContainer.module.css";

const CardsContainer = () => {
  let currentItems = useSelector((state) => state.currentItems);
  let loader = useSelector((state) => state.loader);

  return (
    <section className={style.section_container}>
      {loader.recipes === false ? (
        <Spinner height="500" container_spin={true} />
      ) : currentItems.length > 0 ? (
        currentItems.map((e, i) => (
          <Card
            key={e.id}
            id={e.id}
            title={e.title}
            image={e.image}
            diets={e.diets}
          />
        ))
      ) : (
        <div className={style.not_find_recipes}>
          No se encontró la receta buscada
        </div>
      )}
    </section>
  );
};

export default CardsContainer;
