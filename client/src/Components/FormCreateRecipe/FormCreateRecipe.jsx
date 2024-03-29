import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import FormCreateRecipeInputs from "../FormCreateRecipeInputs/FormCreateRecipeInputs";
import FormCreateRecipeDiets from "../FormCreateRecipeDiets/FormCreateRecipeDiets";
import FormCreateRecipeSteps from "../FormCreateRecipeSteps/FormCreateRecipeSteps";

import { createRecipe, setIsModalOpen } from "../../redux/actions";

import style from "./FormCreateRecipe.module.css";
import Modal from "../Modal/Modal";

const FormCreateRecipe = () => {
  const isModalOpen = useSelector((state) => state.isModalOpen);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    title: "",
    summary: "",
    spoonacularScore: "",
    healthScore: "",
    diets: [],
    steps: [],
  });
  const [alert, setAlert] = useState({
    title: true,
    summary: true,
    spoonacularScore: false,
    healthScore: false,
    steps: false,
  });

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
    let recipe = {
      ...form,
      spoonacularScore:
        form.spoonacularScore === "" ? null : form.spoonacularScore,
      healthScore: form.healthScore === "" ? null : form.healthScore,
      steps: newsteps === "" ? null : newsteps,
    };
    dispatch(setIsModalOpen(true));
    dispatch(createRecipe(recipe));
  };
  const disabeledSubmit = useMemo(() => {
    if (alert.title || alert.summary) return true;
    return false;
  }, [alert]);

  return (
    <main className={`${style.detail_main}`}>
      <div className={`${style.detail_section}`}>
        <div className={`${style.form} `}>
          <p className={`${style.form_title} `}>FORMULARIO PARA CREAR RECETA</p>
          <div className={`${style.flex}`}>
            <FormCreateRecipeInputs
              form={form}
              setForm={setForm}
              alert={alert}
              setAlert={setAlert}
              style={style}
            />
            <FormCreateRecipeDiets
              form={form}
              setForm={setForm}
              style={style}
            />
            <FormCreateRecipeSteps
              form={form}
              setForm={setForm}
              alert={alert}
              setAlert={setAlert}
              style={style}
            />
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
      {isModalOpen.val && (
        <Modal setForm={setForm} setAlert={setAlert} title="Message" />
      )}
    </main>
  );
};

export default FormCreateRecipe;
