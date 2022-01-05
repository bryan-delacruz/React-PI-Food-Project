import { filterByTitle } from "./filterByTitle";
import { filterByDiet } from "./filterByDiet";
import { order } from "./order";

export const handleCurrentRecipes = (recipes, payload) => {
  let currentRecipes = recipes;

  if (payload.byTitle.length > 0) {
    currentRecipes = filterByTitle(currentRecipes, payload.byTitle);
    // currentRecipes = filterByTitle(currentRecipes, payload.byTitle);
    console.log("salió de filterByTitle");
  }

  for (let key in payload) {
    if (payload[key] === true) {
      currentRecipes = filterByDiet(currentRecipes, key);
      // console.log("salió de filterByDiet", key);
    }
  }

  if (payload.byOrder.length > 0) {
    currentRecipes = order(currentRecipes, payload.byOrder);
    // console.log("salió de filterByOrder");
  }

  return currentRecipes;
};
