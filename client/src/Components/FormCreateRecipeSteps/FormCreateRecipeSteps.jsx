import React, { useState, useRef } from "react";

import Alert from "../Alert/Alert";

import trash from "./svg/trash.svg";
import edit from "./svg/edit.svg";

const FormCreateRecipeSteps = ({ form, setForm, alert, setAlert, style }) => {
  const [step, setStep] = useState("");
  const [modoEdicion, setModoEdicion] = useState(false);
  const [number, setNumber] = useState(0);

  const handleInputStep = (e) => {
    setStep(e.target.value);

    if (e.target.value.length <= 48) {
      setAlert({ ...alert, steps: false });
    } else {
      setAlert({ ...alert, steps: true });
    }
  };

  const agregar = (e) => {
    e.preventDefault();

    if (!step.trim()) {
      return;
    }
    if (alert.steps === false) {
      const newStep = {
        number: form.steps.length + 1,
        step: step,
      };
      form.steps.push(newStep);
      setForm(form);
      setStep("");
      setAlert({ ...alert, steps: false });
      inputEl.current.focus();
    }
  };

  const editar = (e) => {
    e.preventDefault();
    if (!step.trim()) {
      return;
    }
    const arrayEditado = form.steps.map((item) =>
      item.number === number ? { number: item.number, step: step } : item
    );
    setForm({ ...form, steps: arrayEditado });
    setModoEdicion(false);
    setStep("");
    setNumber(0);
  };
  const inputEl = useRef(null);
  const activarEdicion = (e, item) => {
    e.preventDefault();
    setModoEdicion(true);
    setStep(item.step);
    setNumber(item.number);
    inputEl.current.focus();
  };

  const eliminar = (number) => {
    const arrayFiltrado = form.steps.filter((item) => item.number !== number);
    const arrayOrdenado = arrayFiltrado.map((item, i) => {
      return { number: i + 1, step: item.step };
    });
    setForm({ ...form, steps: arrayOrdenado });
  };

  return (
    <form onSubmit={modoEdicion ? editar : agregar} className={style.steps}>
      <div>
        <p className={style.dieta_title}>
          {modoEdicion ? "Edit step" : "Add step"}
        </p>
        <div className={style.mb_20}>
          <input
            ref={inputEl}
            type="text"
            placeholder="Enter a step"
            className={style.input_step}
            onChange={(e) => handleInputStep(e)}
            value={step}
          />
          {alert.steps === true && (
            <Alert
              warning={true}
              text={`
            maximum 48 characters`}
              width={500}
            />
          )}
        </div>

        <button
          className={` ${style.btn_steps}
${modoEdicion ? "btn btn-warning w-100" : "btn btn-dark w-100"}`}
          type="button"
          onClick={modoEdicion ? editar : agregar}
        >
          {modoEdicion ? "Edit" : "Add"}
        </button>
      </div>

      <p className={style.dieta_title}>Steps's List</p>
      <ul className="list-group">
        {form.steps.length > 0 ? (
          form.steps.map((item) => (
            <li className={`${style.li}`} key={item.number}>
              <div className={style.li_data}>
                {item.number}. {item.step}
              </div>
              <div className={style.buttons}>
                <button
                  type="button"
                  className="btn btn-warning btn-sm float-end me-2"
                  onClick={(e) => activarEdicion(e, item)}
                >
                  <img className={style.nav_img} src={edit} alt="edit-icon" />
                </button>
                <button
                  type="button"
                  className={"btn btn-danger btn-sm float-end"}
                  onClick={() => eliminar(item.number)}
                >
                  <img className={style.nav_img} src={trash} alt="edit-icon" />
                </button>
              </div>
            </li>
          ))
        ) : (
          <>
            <li key={1} className={`${style.li}`}>
              <div>The recipe don't have a step added</div>
            </li>
          </>
        )}
      </ul>
    </form>
  );
};

export default FormCreateRecipeSteps;
