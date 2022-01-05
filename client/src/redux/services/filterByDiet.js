export const filterByDiet = (array, byDiet) => {
  let byDietValue = byDiet.replaceAll("_", " ");
  array = array.filter((e) => e.diets.includes(byDietValue));
  return array;
};
