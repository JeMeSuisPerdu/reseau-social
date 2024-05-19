import React from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  return (
    <div className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">
          <NavLink
            to="/"
            exact="true"
            className={({ isActive }) => (isActive ? "active-left-nav" : "")}
          >
            <img
              src="./img/icons/home.svg"
              alt="retour à l'accueil du profil"
            />
          </NavLink>
          <br />
          <NavLink
            to="/trending"
            exact="true"
            className={({ isActive }) => (isActive ? "active-left-nav" : "")}
          >
            <img
              src="./img/icons/rocket.svg"
              alt=" retour à l'accueil du profil"
            />
          </NavLink>
          <br />
          <NavLink
            to="/settings"
            exact="true"
            className={({ isActive }) => (isActive ? "active-left-nav" : "")}
          >
            <img src="./img/icons/user.svg" alt=" paramètres du profil" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
