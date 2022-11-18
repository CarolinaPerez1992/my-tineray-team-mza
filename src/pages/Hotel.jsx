import React from "react";
import HotelCard from "../components/HotelCard";
import { useRef, useState } from "react";
import "../card.css";
import { useEffect } from "react";
import axios from "axios";
import { baseURL } from "../url";
import NotElementFound from "../components/NotElementFound";

export default function Hotel() {
  let [hotels, setHotels] = useState([]);
  let [hotelsFilters, setHotelsFilters] = useState([]);
  const searchId = useRef();
  const selectId = useRef();

  useEffect(() => {
    axios
      .get(`${baseURL}api/hotels`)
      .then((response) => setHotels(response.data.data));

    axios
      .get(`${baseURL}api/hotels`)
      .then((response) => setHotelsFilters(response.data.data));
  }, []);
  function filterSelectCards() {
    let orderFiltered = sortHotels();
    let searchFiltered = filterSearch(orderFiltered);
    localStorage.setItem("searchFiltered", JSON.stringify(searchFiltered));
    setHotelsFilters(searchFiltered);
    localStorage.setItem("hotelsFilters", JSON.stringify(searchFiltered));
  }
  function sortHotels() {
    let hotelsSorted;
    let order = selectId.current.value;
    if (order !== "default") {
      if (order === "low") {
        hotelsSorted = hotels
          .sort((a, b) => a.capacity - b.capacity)
          .map((hotel) => hotel);
      } else if (order === "high") {
        hotelsSorted = hotels
          .sort((a, b) => b.capacity - a.capacity)
          .map((hotel) => hotel);
      }
      setHotelsFilters(hotelsSorted);
      return hotelsSorted;
    } else {
      return hotels;
    }
  }

  function filterSearch(array) {
    if (searchId.current.value !== "") {
      let hotelsFilters = array.filter((hotel) =>
        hotel.name.toLowerCase().includes(searchId.current.value.toLowerCase())
      );
      return hotelsFilters;
    } else {
      return array;
    }
  }
  return (
    <>
      <div className="filter">
        <div className="select">
          <select
            name="format"
            id="format"
            onChange={filterSelectCards}
            ref={selectId}
            className="input"
          >
            <option value="high">Greater capacity</option>
            <option value="low">Lower capacity</option>
          </select>
        </div>
        <div className="search">
          <input
            name="search"
            type="search"
            id="search"
            placeholder="Search"
            ref={searchId}
            onChange={filterSelectCards}
          />
        </div>
      </div>
      <div className="cont-card">
        {hotelsFilters.length > 0 ? (
          hotelsFilters.map((cadaPerfil, id) => {
            return (
              <HotelCard datos={cadaPerfil} key={id} id={cadaPerfil._id} />
            );
          })
        ) : (
          <NotElementFound />
        )}
      </div>
    </>
  );
}
