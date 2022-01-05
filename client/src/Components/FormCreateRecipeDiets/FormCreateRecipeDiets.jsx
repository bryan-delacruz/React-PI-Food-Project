import React from "react";
import { useSelector } from "react-redux";

const FormCreateRecipeDiets = ({ form, setForm, style }) => {
  let diets = useSelector((state) => state.diets);

  const handleInputCheckBox = (e) => {
    if (e.target.checked === true) {
      form.diets.push(e.target.value);
      setForm({ ...form });
    } else {
      setForm({
        ...form,
        diets: form.diets.filter((diet) => diet !== e.target.value),
      });
    }
  };
  return (
    <div>
      <div className={style.dieta_filter}>
        <p className={style.dieta_title}>Diets</p>
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
