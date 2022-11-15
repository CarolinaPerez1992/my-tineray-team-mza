import React from "react";
import { useRef } from "react";
import axios from "axios";
import { baseURL } from "../url";

export default function NewHotel() {
  const form = useRef();
  const name = useRef();
  const capacity = useRef();
  const photo = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: name.current.value,
      capacity: capacity.current.value,
      photo: photo.current.value,
      cityId: "636e9b452367c51ce27eb19e",
      userId: "636e67886d5bdab4b6f1716d",
    };
    axios.post(`${baseURL}api/hotels`, data);
  };
  return (
    <>
      <form ref={form} onSubmit={handleSubmit} className="form" id="newHotel">
        <div className="form-body">
          <h3 className="title">New Hotel</h3>
          <input
            id="name"
            name="name"
            ref={name}
            type="text"
            placeholder="Name"
            className="form__input"
            required
          />
          <input
            id="capacity"
            name="capacity"
            ref={capacity}
            type="number"
            placeholder="Capacity"
            className="form__input"
            required
          />
          <input
            id="photo"
            type="text"
            ref={photo}
            placeholder="URL Img"
            className="form__input"
            required
          />
          <div className="submit">
            <button className="submit2">Register</button>
          </div>
        </div>
      </form>
    </>
  );
}
