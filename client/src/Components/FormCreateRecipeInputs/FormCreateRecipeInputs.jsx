import React from "react";

import Alert from "../Alert/Alert";

const FormCreateRecipeInputs = ({ form, setForm, alert, setAlert, style }) => {
  const handleInputs = (e) => {
    if (
      (e.target.name === "spoonacularScore" ||
        e.target.name === "healthScore") &&
      (e.target.value < 1 || e.target.value > 100)
    ) {
      setAlert({ ...alert, [e.target.name]: true });
    } else if (
      (e.target.name === "spoonacularScore" ||
        e.target.name === "healthScore") &&
      (e.target.value >= 1 || e.target.value <= 100)
    ) {
      setAlert({ ...alert, [e.target.name]: false });
    }

    if (
      (e.target.name === "title" || e.target.name === "summary") &&
      e.target.value.length < 1
    ) {
      setAlert({ ...alert, [e.target.name]: true });
    } else if (
      (e.target.name === "title" || e.target.name === "summary") &&
      e.target.value.length >= 1
    ) {
      setAlert({ ...alert, [e.target.name]: false });
    }

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className={style.inputs}>
      <div className={style.mb_20}>
        <input
          type="text"
          className={style.title}
          placeholder="Title"
          name="title"
          onChange={(e) => handleInputs(e)}
          value={form.title}
        />
        {alert.title === true && (
          <Alert text={`campo obligatorio`} width={140} />
        )}
      </div>
      <div className={style.mb_20}>
        <textarea
          id=""
          cols="30"
          rows="10"
          placeholder="Summary"
          name="summary"
          onChange={(e) => handleInputs(e)}
          value={form.summary}
        ></textarea>
        {alert.summary === true && (
          <Alert text={`campo obligatorio`} width={140} />
        )}
      </div>
      <div className={`${style.flex_score} ${style.score}`}>
        <div>
          <input
            type="number"
            placeholder="SpoonacularScore"
            name="spoonacularScore"
            onChange={(e) => handleInputs(e)}
            value={form.spoonacularScore}
          />
          {alert.spoonacularScore === true && (
            <Alert warning={true} text={`range: 0 - 100`} width={140} />
          )}
        </div>
        <div>
          <input
            type="number"
            placeholder="HealthScore"
            name="healthScore"
            onChange={(e) => handleInputs(e)}
            value={form.healthScore}
          />
          {alert.healthScore === true && (
            <Alert warning={true} text={`range: 0 - 100`} width={140} />
          )}
        </div>
      </div>
    </div>
  );
};

export default FormCreateRecipeInputs;
