import React from "react";
import HotelCard from "../components/HotelCard";
import { useRef, useState } from "react";
import "../card.css";
import { useEffect } from "react";
import axios from "axios";
import { baseURL } from "../url";

export default function Hotel() {
  const searchId = useRef();

  let [hotelsFilters, setHotelsFilters] = useState([]);
  useEffect(() => {
    axios
      .get(`${baseURL}api/hotels`)
      .then((response) => setHotelsFilters(response.data.data));
    axios
      .get(`${baseURL}api/hotels`)
      .then((response) => setHotelsFilters(response.data.data));
  }, []);
  function filterSelectCards() {
    let checkFiltered = filterSelect();
    console.log(checkFiltered);
    let searchFiltered = filterSearch(checkFiltered);
    console.log(searchFiltered);
    setHotelsFilters(searchFiltered);
    localStorage.setItem("ciudadesFiltradas", JSON.stringify(searchFiltered));
  }
  function filterSelect() {
    let hotelsSorted;
    let order = searchId.current?.value;
    if (order !== "default") {
      if (order === "low") {
        hotelsSorted = hotelsFilters
          .sort((a, b) => a.capacity - b.capacity)
          .map((hotel) => hotel);
      } else if (order === "high") {
        hotelsSorted = hotelsFilters
          .sort((a, b) => b.capacity - a.capacity)
          .map((hotel) => hotel);
      }
      setHotelsFilters(hotelsSorted);
      return hotelsSorted;
    } else {
      return hotelsFilters;
    }
  } //va el sort

  function filterSearch(array) {
    if (searchId.current.value !== "") {
      let hotelsFilters = array.filter((hotel) =>
        hotel.name.toLowerCase().includes(searchId.current.value.toLowerCase())
      );
      console.log(hotelsFilters);
      return hotelsFilters;
    } else {
      return hotelsFilters;
    }
  }
  return (
    <>
      <div className="filter">
        <div>
          <select name="orden" id="asydes" onChange={filterSelectCards}>
            <option value="ascendent">Ascendent</option>
            <option value="descent">Descendent</option>
          </select>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            ref={searchId}
            onChange={filterSelectCards}
          />
        </div>
      </div>
      <div className="cont-card">
        {hotelsFilters.map((cadaPerfil, id) => (
          <HotelCard datos={cadaPerfil} key={id} />
        ))}
      </div>
    </>
  );
}
