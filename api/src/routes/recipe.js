let express = require("express");
let recipeRoutes = express.Router();
let recipeController = require("../controllers/recipeController");

recipeRoutes.post("/", recipeController.create);

module.exports = recipeRoutes;
