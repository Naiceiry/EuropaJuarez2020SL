import React from "react";
import { Link } from "react-router-dom";
import navbar from "../../img/navbar.jpg";
export const Navbar = () => {
  return (
    <nav className="navbarej">
      <div className="container">
        <Link to="/">
          <img className="imgnavb" src={navbar} />
        </Link>
      </div>
    </nav>
  );
};
