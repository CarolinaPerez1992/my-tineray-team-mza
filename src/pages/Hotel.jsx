import React from "react";
import HotelCard from "../components/HotelCard";
import hotels from "../data/hotels";
import "../card.css";
// import { useState } from "react";
import { useRef } from "react";

export default function Hotel() {
  // let [hotelsFilters, setHotelsFilters] = useState([]);
  const searchId = useRef();

  function filterSelect() {} //va el sort

  function filterSearch() {
    if (searchId.current.value !== "") {
      let hotelsFilters = hotels.filter((hotel) =>
        hotel.name.toLowerCase().includes(searchId.current.value.toLowerCase())
      );
      console.log(hotelsFilters);
      return hotelsFilters;
    } else {
      return hotels;
    }
  }
  return (
    <>
      <div className="filter">
        <div>
          <select name="orden" id="asydes" onChange={filterSelect}>
            <option value="ascendent">Ascendent</option>
            <option value="descent">Descendent</option>
          </select>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            ref={searchId}
            onChange={filterSearch}
          />
        </div>
      </div>
      <div className="cont-card">
        {hotels.map((cadaPerfil, id) => (
          <HotelCard datos={cadaPerfil} key={id} />
        ))}
      </div>
    </>
  );
}
