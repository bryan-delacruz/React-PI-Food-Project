import React from "react";

const FormCreateRecipeDiets = ({ diets, handleInputCheckBox, style }) => {
  return (
    <div>
      <div className={style.dieta_filter}>
        <p className={style.dieta_title}>Tipo de Dieta: </p>
        {diets.length > 0
          ? diets.map((e, i) => {
              let prop = e.replaceAll(" ", "_");
              return (
                <div key={i} className={style.flex_filter}>
                  <input
                    className={style.input}
                    id={e}
                    type="checkbox"
                    name={prop}
                    value={e}
                    onChange={(e) => handleInputCheckBox(e)}
                  />
                  <label className={style.label} htmlFor={e}>
                    {e}
                  </label>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default FormCreateRecipeDiets;
