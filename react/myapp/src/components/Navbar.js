import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/"> Home</NavLink>
        </li>
        <li>
          <NavLink to="/products"> Products</NavLink>
        </li>
        <li>
          <NavLink to="/contact"> Contact</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
