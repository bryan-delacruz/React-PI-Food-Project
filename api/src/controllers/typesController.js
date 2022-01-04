// const { Activity, Country } = require("../db/models");
const axios = require("axios");
const { datajs } = require("../../data");
const { Diet } = require("../db.js");

require("dotenv").config();
const { API_KEY } = process.env;

module.exports = {
  async index(req, res) {
    let types = [];
    let arraytypes = [];
    console.log("index");
    try {
      types = await Diet.findAll();
      console.log("Extrae de la BD la dietas que encuentren", types.length);
    } catch (error) {
      res.json(error);
    }
    if (types.length !== 0) {
      console.log(
        "Se envía las dietas de la BD ya que si se encuentran dietas en la BD",
        types.length
      );
      return res.json(types);
    } else {
      let recipes = [];
      try {
        let { data } = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}PORT&number=100&addRecipeInformation=true`
        );
        recipes = data.results;
        console.log(
          "Se consulta a la API de spoonacular para obtener las recetas"
        );
        for (let i = 0; i < recipes.length; i++) {
          if (recipes[i].hasOwnProperty("diets")) {
            for (let j = 0; j < recipes[i].diets.length; j++) {
              if (!arraytypes.includes(recipes[i].diets[j])) {
                arraytypes.push(recipes[i].diets[j]);
              }
            }
          }
        }
        console.log("Se obtiene las diets");
      } catch (error) {
        recipes = datajs.results;
        console.log(
          "Se extrae del archivo estático datajs para obtener las recetas"
        );
        for (let i = 0; i < recipes.length; i++) {
          if (recipes[i].hasOwnProperty("diets")) {
            for (let j = 0; j < recipes[i].diets.length; j++) {
              if (!arraytypes.includes(recipes[i].diets[j])) {
                arraytypes.push(recipes[i].diets[j]);
              }
            }
          }
        }
      }
      console.log("Se obtiene las diets");
    }
    try {
      for (let i = 0; i < arraytypes.length; i++) {
        types.push({ name: arraytypes[i] });
      }
      let createdTypes = await Diet.bulkCreate(types);
      console.log(
        "Se crea las dietas en la BD Y luego se envía las dietas creadas"
      );
      res.json(createdTypes);
    } catch (error) {
      res.json(error);
    }
  },
};
