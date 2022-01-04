import React, { useRef } from "react";
import style from "./FormCreateRecipe.module.css";

import { useDispatch, useSelector } from "react-redux";

import trash from "./svg/trash.svg";
import edit from "./svg/edit.svg";
import Alert from "../Alert/Alert";
import Spinner from "../Spinner/Spinner";
import { createRecipe } from "../../redux/actions";
import { useMemo } from "react";

const FormCreateRecipe = () => {
  const dispatch = useDispatch();

  let diets = useSelector((state) => state.diets);
  let loader = useSelector((state) => state.loader);

  const [form, setForm] = React.useState({
    title: "",
    summary: "",
    spoonacularScore: "",
    healthScore: "",
    diets: [],
    steps: [],
  });
  const [alert, setAlert] = React.useState({
    title: true,
    summary: true,
    spoonacularScore: false,
    healthScore: false,
    steps: false,
  });

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

  const handleInputCheckBox = (e) => {
    if (e.target.checked === true) {
      let newDiets = form.diets;
      newDiets.push(e.target.value);
      setForm({ ...form, diets: newDiets });
    } else {
      let newDiets = form.diets;
      newDiets = newDiets.filter((diet) => diet !== e.target.value);
      setForm({ ...form, diets: newDiets });
    }
  };

  const [step, setStep] = React.useState("");
  const [modoEdicion, setModoEdicion] = React.useState(false);
  const [number, setNumber] = React.useState(0);

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

  const handleButton = (e) => {
    e.preventDefault();

    let newsteps = "";
    for (let i = 0; i < form.steps.length; i++) {
      newsteps =
        newsteps +
        `<p><span>${form.steps[i].number}${" "}</span>${
          form.steps[i].step
        }</p>`;
    }
    // <p><span>1</span>pollo</p><p><span>2</span>maiz</p>
    let recipe = {
      ...form,
      spoonacularScore:
        form.spoonacularScore === "" ? null : form.spoonacularScore,
      healthScore: form.healthScore === "" ? null : form.healthScore,
      steps: newsteps === "" ? null : newsteps,
    };
    dispatch(createRecipe(recipe));
  };
  const disabeledSubmit = useMemo(() => {
    if (alert.title || alert.summary) return true;
    return false;
  }, [alert]);

  return (
    <main className={`${style.detail_main}`}>
      {loader.diets === true ? (
        <div className={`${style.detail_section}`}>
          <div className={`${style.form} `}>
            <p className={`${style.form_title} `}>
              FORMULARIO PARA CREAR RECETA
            </p>
            <div className={`${style.flex}`}>
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
                      <Alert
                        warning={true}
                        text={`range: 0 - 100`}
                        width={140}
                      />
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
                      <Alert
                        warning={true}
                        text={`range: 0 - 100`}
                        width={140}
                      />
                    )}
                  </div>
                </div>
              </div>
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
              <form
                onSubmit={modoEdicion ? editar : agregar}
                className={style.steps}
              >
                <div>
                  <p className={style.dieta_title}>
                    {modoEdicion ? "Editar step" : "Agregar step"}
                  </p>
                  <div className={style.mb_20}>
                    <input
                      ref={inputEl}
                      type="text"
                      placeholder="Ingrese step"
                      className={style.input_step}
                      onChange={(e) => handleInputStep(e)}
                      value={step}
                    />
                    {alert.steps === true && (
                      <Alert
                        warning={true}
                        text={`máximo 48 caracteres`}
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
                    {modoEdicion ? "Editar" : "Agregar"}
                  </button>
                </div>

                <p className={style.dieta_title}>Lista de Steps</p>
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
                            <img
                              className={style.nav_img}
                              src={edit}
                              alt="edit-icon"
                            />
                          </button>
                          <button
                            type="button"
                            className={"btn btn-danger btn-sm float-end"}
                            onClick={() => eliminar(item.number)}
                          >
                            <img
                              className={style.nav_img}
                              src={trash}
                              alt="edit-icon"
                            />
                          </button>
                        </div>
                      </li>
                    ))
                  ) : (
                    <>
                      <li key={1} className={`${style.li}`}>
                        <div>the recipe don't have a step added</div>
                      </li>
                    </>
                  )}
                </ul>
              </form>
            </div>
            <button
              disabled={disabeledSubmit}
              type="submit"
              className={style.button}
              onClick={(e) => handleButton(e)}
              style={
                disabeledSubmit
                  ? { background: "#969696", border: "none" }
                  : { "": "" }
              }
            >
              Crear
            </button>
          </div>
        </div>
      ) : (
        <Spinner height="542" container_spin={true} />
      )}
    </main>
  );
};

export default FormCreateRecipe;
