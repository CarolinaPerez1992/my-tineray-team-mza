import React from "react";
import { useParams } from "react-router";
import Show from "../components/Show";
import NotElementFound from "../components/NotElementFound";
import "../details.css";
import axios from "axios";
import { baseURL } from "../url";
import { useEffect, useState } from "react";

export default function DetailHotel() {
  let [hotels, setHotels] = useState([]);
  const { id } = useParams();
  let [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}api/hotels/${id}`)
      .then((res) => setHotels(res.data.response));

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    axios
      .get(`${baseURL}api/shows?hotelId=${id}`)
      .then((res) => setShows(res.data.data));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="cardDetPadre">
        <div className="cardDet">
          <div className="contimg">
            <img src={hotels.photo} alt={hotels.name} />
          </div>
          <div className="cardinfo">
            <h1>{hotels.name}</h1>
            <h2>Capacity: {hotels.capacity}</h2>
          </div>
        </div>
      </div>
      <div className="cardEvents">
        {shows.length > 0 ? (
          shows.map((e) => <Show key={e._id} show={e} />)
        ) : (
          <NotElementFound />
        )}
      </div>
    </>
  );
}
