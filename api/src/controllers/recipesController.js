// const { Activity, Country } = require("../db/models");
const axios = require("axios");
const { datajs } = require("../../data");
const { Recipe, Diet } = require("../db.js");
const recipesRoutes = require("../routes/recipes");

require("dotenv").config();
const { API_KEY } = process.env;

const obtenerNewStep = (steps) => {
  let newSteps = "";
  for (let i = 0; i < steps.length; i++) {
    newSteps = `${newSteps}<p><span>${steps[i].number} </span>${steps[i].step}</p>`;
  }
  return newSteps;
};

module.exports = {
  async index(req, res) {
    let recipes = [];
    let URL_index = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}PORT&number=100&addRecipeInformation=true`;
    const { name } = req.query;

    try {
      let { data } = await axios.get(URL_index);
      data.results.map((recipe) => {
        let obj = {
          id: recipe.id,
          title: recipe.title,
          spoonacularScore: recipe.spoonacularScore,
          healthScore: recipe.healthScore,
          image: recipe.image,
          summary: recipe.summary,
          // Algunas recetas no tienen dietas definida
          diets: recipe.diets === undefined ? [] : recipe.diets,
          // Algunas recetas no tienen pasos definidos
          steps:
            recipe.analyzedInstructions[0] === undefined
              ? ""
              : obtenerNewStep(recipe.analyzedInstructions[0].steps),
        };
        recipes.push(obj);
      });
    } catch (error) {
      console.log("datajs");
      datajs.results.map((recipe) => {
        let obj = {
          id: recipe.id,
          title: recipe.title,
          spoonacularScore: recipe.spoonacularScore,
          healthScore: recipe.healthScore,
          image: recipe.image,
          summary: recipe.summary,
          // Algunas recetas no tienen dietas definida
          diets: recipe.diets === undefined ? [] : recipe.diets,
          // Algunas recetas no tienen pasos definidos
          steps:
            recipe.analyzedInstructions[0] === undefined
              ? ""
              : obtenerNewStep(recipe.analyzedInstructions[0].steps),
        };
        recipes.push(obj);
      });
    }

    try {
      let recipesDB = await Recipe.findAll({
        include: {
          model: Diet,
          attributes: ["name"],
          through: { attributes: [] },
        },
      });
      for (let j = 0; j < recipesDB.length; j++) {
        let newDiets = [];
        for (let i = 0; i < recipesDB[j].diets.length; i++) {
          newDiets.push(recipesDB[j].diets[i].name);
        }
        let newRecipe = {
          id: recipesDB[j].id,
          title: recipesDB[j].title,
          summary: recipesDB[j].summary,
          image: recipesDB[j].image === null ? "" : recipesDB[j].image,
          spoonacularScore:
            recipesDB[j].spoonacularScore === null
              ? 0
              : recipesDB[j].spoonacularScore,
          healthScore:
            recipesDB[j].healthScore === null ? 0 : recipesDB[j].healthScore,
          // Algunas recetas no tienen dietas definida
          diets: recipesDB[j].diets === null ? [] : newDiets,
          // Algunas recetas no tienen pasos definidos
          steps: recipesDB[j].steps === null ? "" : recipesDB[j].steps,
        };
        recipes.push(newRecipe);
      }
    } catch (error) {
      console.log(error);
    }
    if (name) {
      let filterRecipes = recipes.filter(
        (e) => e.title.toLowerCase().search(name.toLowerCase()) >= 0
      );
      res.json(filterRecipes);
    } else {
      res.json(recipes);
    }
  },

  async getById(req, res) {
    const { id } = req.params;
    if (id.length !== 36) {
      let URL_index = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}PORT&number=100&addRecipeInformation=true`;
      try {
        let { data } = await axios.get(URL_index);
        let recipeSearch = data.results.find((e) => e.id === parseInt(id));
        if (recipeSearch !== undefined) {
          let newRecipe = {
            id: recipeSearch.id,
            title: recipeSearch.title,
            spoonacularScore: recipeSearch.spoonacularScore,
            healthScore: recipeSearch.healthScore,
            image: recipeSearch.image,
            summary: recipeSearch.summary,
            // Algunas recetas no tienen dietas definida
            diets: recipeSearch.diets === undefined ? [] : recipeSearch.diets,
            // Algunas recetas no tienen pasos definidos
            steps:
              recipeSearch.analyzedInstructions[0] === undefined
                ? ""
                : obtenerNewStep(recipeSearch.analyzedInstructions[0].steps),
          };
          return res.json(newRecipe);
        }
      } catch (error) {
        console.log("datajs");
        let recipeSearch = datajs.results.find((e) => e.id === parseInt(id));
        if (recipeSearch !== undefined) {
          let newRecipe = {
            id: recipeSearch.id,
            title: recipeSearch.title,
            spoonacularScore: recipeSearch.spoonacularScore,
            healthScore: recipeSearch.healthScore,
            image: recipeSearch.image === null ? "" : recipeSearch.image,
            summary: recipeSearch.summary,
            // Algunas recetas no tienen dietas definida
            diets: recipeSearch.diets === undefined ? [] : recipeSearch.diets,
            // Algunas recetas no tienen pasos definidos
            steps:
              recipeSearch.analyzedInstructions[0] === undefined
                ? ""
                : obtenerNewStep(recipeSearch.analyzedInstructions[0].steps),
          };
          return res.json(newRecipe);
        }
      }
      res.json(`No se encontró la receta con id ${id}`);
    } else {
      try {
        let recipeSearch = await Recipe.findByPk(id, {
          include: {
            model: Diet,
            attributes: ["name"],
          },
        });
        if (recipeSearch !== null) {
          let diets = [];
          for (let i = 0; i < recipeSearch.diets.length; i++) {
            diets.push(recipeSearch.diets[i].name);
          }
          let newRecipe = {
            id: recipeSearch.id,
            title: recipeSearch.title,
            summary: recipeSearch.summary,
            image: recipeSearch.image === null ? "" : recipeSearch.image,
            spoonacularScore:
              recipeSearch.spoonacularScore === null
                ? 0
                : recipeSearch.spoonacularScore,
            healthScore:
              recipeSearch.healthScore === null ? 0 : recipeSearch.healthScore,
            // Algunas recetas no tienen dietas definida
            diets: recipeSearch.diets === null ? [] : diets,
            // Algunas recetas no tienen pasos definidos
            steps: recipeSearch.steps === null ? "" : recipeSearch.steps,
          };
          return res.json(newRecipe);
        }
      } catch (error) {
        console.log("error findByPk");
        return res.json(error);
      }
      res.json(`No se encontró la receta con id ${id}`);
    }

    // res.json(`No se encontró la receta con id ${id}`);
  },
};
