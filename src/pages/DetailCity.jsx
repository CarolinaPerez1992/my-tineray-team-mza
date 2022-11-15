import React from "react";
import { useParams } from "react-router";
import Itinerary from "../components/Itinerary";
import NotElementFound from "../components/NotElementFound";
import "../details.css";
import axios from "axios";
import {baseURL} from "../url"
import { useEffect, useState } from "react";

export default function DetailCity() {
  let [cities, setCities] = useState([]);
  const { id } = useParams();
  console.log(id);
  // let city = ciudades.find((city) => city.id === id);

  // let event = events.filter((event) => event.citiId === id);
  // console.log(event);

  let [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}api/cities/${id}`)
      .then((res) => setCities(res.data.response));

    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    axios.get(`${baseURL}api/itineraries?citiId=${id}`)
      .then((res) => setActivities(res.data.data));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="cardDetPadre">
        <div className="cardDet">
          <div className="contimg">
            <img src={cities.photo} alt="" />
          </div>
          <div class="cardinfo">
            <h1>{cities.name}</h1>
            <h2>Continent: {cities.continent}</h2>
            <h2>Population: {cities.population}</h2>
          </div>
        </div>
      </div>
      <div className="cardEvents">
        {activities.length > 0 ? (
          activities.map((e) => <Itinerary key={e._id} event={e} />)
        ) : (
          <NotElementFound />
        )}
      </div>
    </>
  );
}
