import React from "react";

import style from "./RecipeDetail.module.css";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../../redux/actions";
import { useEffect } from "react";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipeById = useSelector((state) => state.recipeById);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipeById(id));
  }, [dispatch, id]);

  if (recipeById.image === "") {
    recipeById.image =
      "data:image/jpeg;base64,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";
  }

  return (
    <main className={`${style.detail_main}`}>
      {!recipeById.hasOwnProperty("id") ? (
        <div className={style.not_find_recipes}>
          No se encontró la receta buscada
        </div>
      ) : (
        <div className={`${style.detail_section} ${style.flex}`}>
          <img
            className={style.img}
            src={recipeById.image}
            alt="recipe-img-detail"
          />
          <div className={style.card}>
            <h4>{recipeById.title}</h4>
            <div className={`${style.score}`}>
              <div>
                <span className={`${style.green}`}>✓ </span>
                spoonacularScore:
                <span
                  className={style.bold}
                >{` ${recipeById.spoonacularScore}`}</span>
              </div>
              <div>
                <span className={`${style.green}`}>✓ </span>
                healthScore:
                <span
                  className={style.bold}
                >{` ${recipeById.healthScore}`}</span>
              </div>
            </div>
            <div className={style.summary}>
              <h5>Resumen:</h5>
              <p
                dangerouslySetInnerHTML={{ __html: recipeById.summary }}
                style={{ fontSize: "15px", lineHeight: "22px" }}
              />
            </div>
            <div
              className={style.steps}
              dangerouslySetInnerHTML={{ __html: recipeById.steps }}
            ></div>
          </div>
        </div>
      )}
    </main>
  );
};

export default RecipeDetail;
