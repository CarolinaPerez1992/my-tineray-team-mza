import React from "react";
import github from "../img/github.png";
import CallToAction from "./CallToAction";
import ScrollToTop from "./ScrollToTop";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="git">
        <a href="https://github.com/CarolinaPerez1992">
          <img className="" width="20" src={github} alt="" />
          <span>Carolina Perez</span>
        </a>
        <a href="https://github.com/Raulmoyano2970">
          <img className="" width="20" src={github} alt="" />
          <span>Raul Moyano</span>
        </a>
      </div>
      <div>
        <ScrollToTop />
      </div>
    </div>
  );
}
