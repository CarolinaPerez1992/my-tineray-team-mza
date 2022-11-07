import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import CallToAction from "./CallToAction";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <Link to="/">
        <img className="" width="100" src={logo} alt="" />
      </Link>
      <CallToAction />
    </div>
  );
}
