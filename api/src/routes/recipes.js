let express = require("express");
let recipesRoutes = express.Router();
let recipesController = require("../controllers/recipesController");

recipesRoutes.get("/", recipesController.index);
recipesRoutes.get("/:id", recipesController.getById);


module.exports = recipesRoutes;