import React from "react";
import "../card.css";
import { Link } from "react-router-dom"

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
          <Link to={`/detailhotel/${datos.id}`}>
            <button>More details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
