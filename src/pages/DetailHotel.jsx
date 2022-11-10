import React from "react";
import { useParams } from "react-router";
import hotels from "../data/hotels";
import hotelShow from "../data/hotelShow";
import Show from "../components/Show";
import NotElementFound from "../components/NotElementFound";
import "../details.css";

export default function DetailHotel() {
  const { id } = useParams();
  console.log(id);
  let hotel = hotels.find((hotel) => hotel.id === id);

  let show = hotelShow.filter((show) => show.hotelId === id);
  console.log(show);

  return (
    <>
      <div className="cardDetPadre">
        <div className="cardDet">
          <div className="contimg">
            <img src={hotel.photo[1]} alt="" />
          </div>
          <div class="cardinfo">
            <h3>{hotel.name}</h3>
            <p>{hotel.continent}</p>
            <p>{hotel.population}</p>
          </div>
        </div>
      </div>
      <div className="cardEvents">
        {show.length > 0 ? (
          show.map((e) => <Show key={e.id} show={e} />)
        ) : (
          <NotElementFound />
        )}
      </div>
    </>
  );
}
