import React from "react";
import { useParams } from "react-router";
import dataCity from "../data/dataCity";
import events from "../data/events";
import Itinerary from "../components/Itinerary";
import NotElementFound from "../components/NotElementFound";
import "../details.css";

export default function DetailCity() {
  const { id } = useParams();
  console.log(id);
  let city = dataCity.find((city) => city.id === id);

  let event = events.filter((event) => event.citiId === id);
  console.log(event);

  return (
    <>
      <div className="cardDetPadre">
        <div className="cardDet">
          <div className="contimg">
            <img src={city.photo} alt="" />
          </div>
          <div class="cardinfo">
            <h1>{city.name}</h1>
            <h2>Continent: {city.continent}</h2>
            <h2>Population: {city.population}</h2>
          </div>
        </div>
      </div>
      <div className="cardEvents">
        {event.length > 0 ? (
          event.map((e) => <Itinerary key={e.id} event={e} />)
        ) : (
          <NotElementFound />
        )}
      </div>
    </>
  );
}
