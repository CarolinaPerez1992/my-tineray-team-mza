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
            <h3> {event.name} </h3>
            <h5>{event.description}</h5>
            <h5>Price: U$D{event.price} </h5>
          </div>
        </div>
      </div>
    </>
  );
}
