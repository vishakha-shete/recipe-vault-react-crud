import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home.jsx";
import Recipes from "../pages/Recipes";
import About from "../pages/About";
import Create from '../pages/Create-Recipes'
const MainRoutes =  ({ addRecipe, recipes }) => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} />
        <Route path="/Create-Recipes" element={<Create  addRecipe={addRecipe}/>} />
      </Routes>
    );
  };
  
  export default MainRoutes;