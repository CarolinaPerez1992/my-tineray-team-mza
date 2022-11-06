import React from 'react'
import "../card.css"

export default function CityCard({datos}) {
  return (
    <div className="contenedor-card">
    <div className="card">
      <div className="card-img">
        <img src={datos.photo} alt={datos.name} />
      </div>
      <div className="sub-card">
        <h3>{datos.name}</h3>
        <p>Continent: {datos.continent}</p>
        <p>Population: {datos.population}</p>
      </div>
    </div>
  </div>
)
}
