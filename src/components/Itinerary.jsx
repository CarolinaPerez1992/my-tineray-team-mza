import React from "react";
import "../shows.css";
export default function Itinerary(props) {
  let { event } = props;

  return (
    <>
      <div className="divShow">
        <div className="mainShow">
          <div className="imgshow">
            <img className="" src={event.photo[0]} alt={event.name} />
          </div>
          <div className="divInfo">
            <p>{event.name} </p>
            <p>{event.description}</p>
            <p>Price: U$D{event.price} </p>
          </div>
        </div>
      </div>
    </>
  );
}
