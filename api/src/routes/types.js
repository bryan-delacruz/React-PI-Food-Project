let express = require("express");
let typesRoutes = express.Router();
let typesController = require("../controllers/typesController");

typesRoutes.get("/", typesController.index);

module.exports = typesRoutes;
