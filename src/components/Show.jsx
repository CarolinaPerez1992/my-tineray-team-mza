import React from "react";
import "../shows.css";
export default function Show(props) {
  let { show } = props;
  console.log(show);

  return (
    <>
      <div className="divShow">
        <div className="mainShow">
          <div className="imgshow">
            <img className="" src={show.photo} alt={show.name} />
          </div>
          <div className="divInfo">
            <h1 className="h1">Show: {show.name} </h1>
            <h2>{show.description}</h2>
            <h3>Price: U$D{show.price} </h3>
          </div>
        </div>
      </div>
    </>
  );
}
