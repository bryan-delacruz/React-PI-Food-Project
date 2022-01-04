import axios from "axios";
export const GET_RECIPES = "GET_RECIPES";
export const GET_DIETS = "GET_DIETS";
export const GET_RECIPE_BY_ID = "GET_RECIPE_BY_ID";
export const GET_RECIPES_BY_NAME = "GET_RECIPES_BY_NAME";
export const FILTER_RECIPES = "FILTER_RECIPES";
export const ORDER_RECIPES = "ORDER_RECIPES";
export const SET_LOADER = "SET_LOADER";
export const SET_CURRENT_ITEMS_BY_PAGE = "SET_CURRENT_ITEMS_BY_PAGE";
export const SET_CURRENT_ITEMS = "SET_CURRENT_ITEMS";

export const getRecipes = () => async (dispatch) => {
  try {
    let { data } = await axios.get(`/recipes`);
    console.log("RECIPES", "Se envía data de la API");
    return dispatch({ type: GET_RECIPES, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getDiets = () => async (dispatch) => {
  try {
    let { data } = await axios.get(`/types`);
    console.log("DIETS", "Se envía data de la API");
    return dispatch({ type: GET_DIETS, payload: data });
  } catch (error) {
    console.log("DIETS", "Se envía data (array estático)");
    console.log(error);
  }
};
export const getRecipeById = (id) => async (dispatch) => {
  try {
    let { data } = await axios.get(`/recipes/${id}`);
    console.log("RECIPE BY ID", "Se envía data de la API");
    return dispatch({ type: GET_RECIPE_BY_ID, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const createRecipe = (data) => async (dispatch) => {
  try {
    await axios.post(`/recipe`, data);
    console.log("RECIPE", "Se crea receta en la BD");
  } catch (error) {
    console.log(error);
  }
  try {
    let { data } = await axios.get(`/recipes`);
    console.log("RECIPES", "Se envía data de la API");
    return dispatch({ type: GET_RECIPES, payload: data });
  } catch (error) {
    console.log("RECIPES", "Se envía data.js (archivo estático)");
    console.log(error);
  }
};
export const getRecipesByName = (input) => async (dispatch) => {
  try {
    let { data } = await axios.get(`/recipes?name=${input}`);
    console.log("RECIPES_BY_NAME", "Se envía data de la API");
    return dispatch({ type: GET_RECIPES_BY_NAME, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const orderRecipes = (filters_and_order) => {
  return { type: ORDER_RECIPES, payload: filters_and_order };
};
export const filterRecipes = (filters_and_order) => {
  return { type: FILTER_RECIPES, payload: filters_and_order };
};
export const set_current_items_by_page = (data) => {
  return { type: SET_CURRENT_ITEMS_BY_PAGE, payload: data };
};
export const setLoader = (loader) => {
  return { type: SET_LOADER, payload: loader };
};
