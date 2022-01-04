// const { Activity, Country } = require("../db/models");
// const axios = require("axios");
// const { datajs } = require("../../data");
const { Recipe, Diet } = require("../db.js");
// require("dotenv").config();
// const { API_KEY } = process.env;

module.exports = {
  async create(req, res) {
    let { title, summary, spoonacularScore, healthScore, steps, image, diets } =
      req.body;
    if (!title)
      return res.status(400).json({ error: "Debe ingresar un titulo" });
    if (!summary)
      return res
        .status(400)
        .json({ error: "Debe ingresar un resumen del plato" });
    try {
      let newRecipe = await Recipe.create({
        title,
        spoonacularScore,
        healthScore,
        image,
        summary,
        steps,
      });
      let dietsDB = await Diet.findAll();
      let dietsId = [];
      for (let i = 0; i < diets.length; i++) {
        let dietDB = dietsDB.find((e) => e.name === diets[i]);
        dietsId.push(dietDB.id);
      }
      await newRecipe.addDiets(dietsId);
      res.json(`Se creo la receta ${title} con éxito`);
    } catch (error) {
      res.json(error);
    }
  },
};
