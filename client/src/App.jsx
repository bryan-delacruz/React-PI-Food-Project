import "./App.css";

import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import DetailPage from "./Pages/DetailPage/DetailPage";
import CreateRecipePage from "./Pages/CreateRecipePage/CreateRecipePage";
import HomePage from "./Pages/HomePage/HomePage";
import LandingPage from "./Pages/LandingPage/LandingPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage.jsx";

import { getDiets, getRecipes } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getDiets());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/recipes/:id" element={<DetailPage />} />
        <Route exact path="/createRecipe" element={<CreateRecipePage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
