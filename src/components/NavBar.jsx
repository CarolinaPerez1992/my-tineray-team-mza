import React from "react";
import { Link as NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../img/logo.png";
import usuario from "../img/usuario.png";
import hambur from "../img/hambur.png";
import { Link } from "react-router-dom";
import "../index.css";

export default function NavBar() {
  let [mostrar, setMostrarOcultar] = useState(true);
  let change = () => {
    setMostrarOcultar(!mostrar);
  };

  let [mostrarMenu, setMostrarMenu] = useState(false);
  let menu = () => {
    setMostrarMenu(!mostrarMenu);
  };

  return (
    <header className="nav-bar">
      <Link to="/">
        <img className="" width="100" src={logo} alt="" />
      </Link>

      {mostrarMenu ? (
        <div className="">
          <img src={hambur} onClick={menu} alt="menu" />
          <div className="nav1">
            <NavLink to="/cities" style={{ textDecoration: "none" }}>
              <h2>Cities</h2>
            </NavLink>
            <NavLink to="/hotels" style={{ textDecoration: "none" }}>
              <h2>Hotels</h2>
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="flex-menu">
          <img src="{hambur}" onClick={menu} alt="" />
        </div>
      )}
      <nav className="citi-hote">
        <Link to="/cities" style={{ textDecoration: "none" }}>
          <h6 className="btn">Cities</h6>
        </Link>
        <Link to="/hotels" style={{ textDecoration: "none" }}>
          <h6 className="btn">Hotels</h6>
        </Link>
      </nav>
      {mostrar ? (
        <div className="login">
          <img src={usuario} width="45" onClick={change} alt="" />
        </div>
      ) : (
        <div className="login">
          <img src={usuario} width="45" onClick={change} alt="" />
          <div className="datosLogin">
            <Link to="/signin" style={{ textDecoration: "none" }}>
              <li>LogIn</li>
            </Link>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <li>LogOut</li>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
// {
//   /* <Link to="/">
//   <img className="" width="100" src={logo} alt="" />
// </Link>; */
// }
