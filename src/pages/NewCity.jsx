import React from 'react'
import Layout from '../layout/Layout'
import { useState, useEffect } from "react";

export default function NewCity() {
  const getRecord = () => {
    let data = localStorage.getItem("NewCity");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let myObject = { name, continent, photo, population};
    setRegistration([...registration, myObject]);
    alert('You registered successfully!')
    limpiarFormulario();
  };

  const limpiarFormulario = () => {
    setName("");
    setContinent("");
    setPhoto("");
    setPopulation("");

    document.getElementById("myForm").reset();
  };

  const [registration, setRegistration] = useState(getRecord());

  const [name, setName] = useState("");
  const [continent, setContinent] = useState("");
  const [photo, setPhoto] = useState("");
  const [population, setPopulation] = useState("");

  useEffect(() => {
    localStorage.setItem("registro", JSON.stringify(registration));
  }, [registration]);

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="form" id="newCity">
        <div className="form-body">
          <h3 className="title">New City</h3>
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
            id="continent"
            name="continent"
            type="text"
            placeholder="Continent"
            className="form__input"
            onChange={(e) => setContinent(e.target.value)}
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
            id="population"
            type="number"
            placeholder="Population"
            className="form__input"
            onChange={(e) => setPopulation(e.target.value)}
            required
          />
          <div className="submit">
            <button className="submit2">Register</button>
          </div>
        </div>
      </form>
    </Layout>
  )
}
