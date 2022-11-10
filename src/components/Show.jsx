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
            <p>{show.name} </p>
            <p>{show.description}</p>
            <p>Price: U$D{show.price} </p>
          </div>
        </div>
      </div>
    </>
  );
}
