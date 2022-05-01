import React from "react";
import { Link } from "react-router-dom";
import navbar from "../../img/navbar.jpg";
import linearecta from "../../img/linearecta.jpg";
export const Navbar = () => {
  return (
    <nav className="navbarej">
      <Link to="/">
        <img className="imgnavb" src={navbar} />
      </Link>
      <div className="divnavb">
        <img className="imgnavb" src={linearecta} />
        <img className="imgnavb" src={linearecta} />
      </div>
    </nav>
  );
};
