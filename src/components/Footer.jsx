import React from "react";
import git from "../img/git.png";
import CallToAction from "./CallToAction";
import ScrollToTop from "./ScrollToTop";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="git">
        <a href="https://github.com/CarolinaPerez1992">
          <img className="" width="50" src={git} alt="" />
          <span>Carolina Perez</span>
        </a>
        <a href="https://github.com/Raulmoyano2970">
          <img className="" width="50" src={git} alt="" />
          <span>Raul Moyano</span>
        </a>
      </div>
      <div>
        <ScrollToTop />
      </div>
      <div className="foot">
        <CallToAction />
        <Link to="/newhotel">
          <p className="formnew">New Hotel</p>
        </Link>
        <Link to="/newcity">
          <p className="formnew">New City</p>
        </Link>
      </div>
    </div>
  );
}
