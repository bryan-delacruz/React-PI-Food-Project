import {
  ORDER_RECIPES,
  FILTER_RECIPES,
  GET_RECIPES,
  SET_CURRENT_ITEMS_BY_PAGE,
  GET_DIETS,
  SET_LOADER,
  GET_RECIPE_BY_ID,
  GET_RECIPES_BY_NAME,
} from "./actions";
import { filterByDiet } from "./services/filterByDiet";

import { handleCurrentRecipes } from "./services/handleCurrentRecipes";
import { order } from "./services/order";

const initialState = {
  recipes: [],
  recipeById: {},
  currentRecipes: [],

  filters_and_order: {
    byTitle: "",
    gluten_free: false,
    dairy_free: false,
    lacto_ovo_vegetarian: false,
    vegan: false,
    paleolithic: false,
    primal: false,
    pescatarian: false,
    fodmap_friendly: false,
    whole_30: false,
    byOrder: "orderHigScore",
  },

  diets: [],

  loader: { recipes: false, diets: false },

  currentPage: 1,
  itemsPerPage: 9,
  currentItems: [],
};

//En nuestro estado guardaremos objetos con `todos`. Cada todo tendra: title, description, place, date, id y un status;
const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECIPES: {
      let currentRecipes = order(payload, state.filters_and_order.byOrder);
      return {
        ...state,
        recipes: payload,
        currentRecipes: currentRecipes,
        currentItems: currentRecipes.slice(0, state.itemsPerPage),
        loader: { ...state.loader, recipes: true },
      };
    }
    case GET_RECIPE_BY_ID: {
      return {
        ...state,
        recipeById: payload,
      };
    }
    case GET_RECIPES_BY_NAME: {
      let currentRecipes = payload.data;
      for (let key in payload.filters_and_order) {
        if (payload.filters_and_order[key] === true) {
          currentRecipes = filterByDiet(currentRecipes, key);
        }
      }
      if (payload.filters_and_order.byOrder.length > 0) {
        currentRecipes = order(
          currentRecipes,
          payload.filters_and_order.byOrder
        );
      }
      return {
        ...state,
        filters_and_order: payload.filters_and_order,
        currentRecipes: currentRecipes,
        currentItems: currentRecipes.slice(0, state.itemsPerPage),
        currentPage: 1,
      };
    }
    case GET_DIETS: {
      let arrayDiets = [];
      for (let i = 0; i < payload.length; i++) {
        arrayDiets.push(payload[i].name);
      }
      return {
        ...state,
        diets: arrayDiets,
        loader: { ...state.loader, diets: true },
      };
    }
    case ORDER_RECIPES: {
      let currentRecipes = handleCurrentRecipes(state.recipes, payload);
      return {
        ...state,
        filters_and_order: payload,
        currentRecipes: currentRecipes,
        currentItems: currentRecipes.slice(0, state.itemsPerPage),
        currentPage: 1,
      };
    }
    case FILTER_RECIPES: {
      let currentRecipes = handleCurrentRecipes(state.recipes, payload);
      return {
        ...state,
        filters_and_order: payload,
        currentRecipes: currentRecipes,
        currentItems: currentRecipes.slice(0, state.itemsPerPage),
        currentPage: 1,
      };
    }
    case SET_CURRENT_ITEMS_BY_PAGE: {
      let currentPageLocal = payload;
      let indexOfLastItem = currentPageLocal * state.itemsPerPage;
      let indexOfFirstItem = indexOfLastItem - state.itemsPerPage;
      let currentItemsLocal = state.currentRecipes.slice(
        indexOfFirstItem,
        indexOfLastItem
      );
      return {
        ...state,
        currentPage: currentPageLocal,
        currentItems: currentItemsLocal,
      };
    }
    case SET_LOADER: {
      return {
        ...state,
        loader: payload,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
