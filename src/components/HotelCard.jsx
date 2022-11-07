import React from "react";
import "../card.css";
export default function HotelCard(props) {
  let { datos } = props;
  console.log(datos);
  return (
    <div className="contenedor-card">
      <div className="card">
        <div className="card-img">
          <img src={datos.photo[0]} alt={datos.name} />
        </div>
        <div className="sub-card">
          <h3>{datos.name}</h3>
        </div>
      </div>
    </div>
  );
}
