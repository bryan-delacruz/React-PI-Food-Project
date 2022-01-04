let express = require("express");
let router = express.Router();

const recipesRoutes = require("./recipes");
const recipeRoutes = require("./recipe");
const typesRoutes = require("./types");

// Import route files
router.use("/recipes", recipesRoutes);
router.use("/types", typesRoutes);
router.use("/recipe", recipeRoutes);

// Test route
router.get("/", (req, res) => {
  res.json({ msg: "API working like a charm!" });
});

module.exports = router;
