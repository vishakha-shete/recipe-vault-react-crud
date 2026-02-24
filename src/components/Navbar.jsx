import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center gap-x-10 p-4 text-sm mb-10">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-rose-400 font-semibold" : "text-gray-300"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/About"
        className={({ isActive }) =>
          isActive ? "text-rose-400 font-semibold" : "text-gray-300"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/recipes"
        className={({ isActive }) =>
          isActive ? "text-rose-400 font-semibold" : "text-gray-300"
        }
      >
        Recipies
      </NavLink>
      <NavLink
        to="/Create-Recipes"
        className={({ isActive }) =>
          isActive ? "px-2 py-2 bg-gray-900 rounded text-rose-400 font-semibold" : "text-gray-300"
        }
      >
        Creat-Recipes
      </NavLink>
    </div>
  );
};

export default Navbar;