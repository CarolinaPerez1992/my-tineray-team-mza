import React from "react";
import { useState, useEffect } from "react";

export default function NewHotel() {
  const getRecord = () => {
    let data = localStorage.getItem("NewHotel");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let myObject = { name, capacity, photo, cityid };
    setRegistration([...registration, myObject]);
    alert("You registered successfully!");
    limpiarFormulario();
  };

  const limpiarFormulario = () => {
    setName("");
    setCapacity("");
    setPhoto("");
    setCityId("");

    document.getElementById("myForm").reset();
  };

  const [registration, setRegistration] = useState(getRecord());

  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [photo, setPhoto] = useState("");
  const [cityid, setCityId] = useState("");

  useEffect(() => {
    localStorage.setItem("NewHotel", JSON.stringify(registration));
  }, [registration]);

  return (
    <>
      <form onSubmit={handleSubmit} className="form" id="newHotel">
        <div className="form-body">
          <h3 className="title">New Hotel</h3>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            className="form__input"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            id="capacity"
            name="capacity"
            type="number"
            placeholder="Capacity"
            className="form__input"
            onChange={(e) => setCapacity(e.target.value)}
            required
          />
          <input
            id="photo"
            type="text"
            placeholder="URL Img"
            className="form__input"
            onChange={(e) => setPhoto(e.target.value)}
            required
          />
          <input
            id="cityId"
            type="text"
            placeholder="cityId"
            className="form__input"
            onChange={(e) => setCityId(e.target.value)}
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
