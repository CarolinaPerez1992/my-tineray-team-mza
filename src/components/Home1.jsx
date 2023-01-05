import React from "react";
import { Link } from "react-router-dom";
import iniciovideo from "../img/clideo_editor_d1d0e2d988084eaaab6aae759508adf8.mp4"

export default function Home1() {
  return (
    <>
<video className='bg-img-1' src={iniciovideo} autoPlay muted loop>   </video>
    <div className="home1 cajaglass">
      <div className="contenedor">
        <div className="cajilla glassform">
        <h1 className="tineraryy">My Tinerary</h1>
        <h3 className="h3">The best of trips is the next one </h3>
        
        <ul>
          <Link className="link" to="/hotels">
            <li className="btn" href="">
              Hotels
            </li>
          </Link>
          <Link className="link" to="/cities">
            <li className="btn" href="">
              Cities
            </li>
          </Link>
        </ul>
        </div>
      </div>
    </div>
    
    </>
  );
}
