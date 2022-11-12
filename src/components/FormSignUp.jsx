import "../sign.css";
import React, { useState, useEffect } from "react";

export default function FormSignUp() {
  const getRecord = () => {
    let data = localStorage.getItem("registration");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let myObject = { name, surName, country, mobileNumber, email, password };
    setRegistration([...registration, myObject]);
    alert('You registered successfully!')
    limpiarFormulario();
  };

  const limpiarFormulario = () => {
    setName("");
    setSurName("");
    setCountry("");
    setMobileNumber("");
    setEmail("");
    setPassword("");

    document.getElementById("myForm").reset();
  };

  const [registration, setRegistration] = useState(getRecord());

  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [country, setCountry] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /*     const [error, setError] = useState(""); */

  useEffect(() => {
    localStorage.setItem("registro", JSON.stringify(registration));
  }, [registration]);

  return (
    <>
      <form onSubmit={handleSubmit} className="form" id="miFormulario">
        <div className="form-body">
          <h3 className="title">Sing-Up</h3>
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
            id="LastName"
            name="LatName"
            type="text"
            placeholder="LastName"
            className="form__input"
            onChange={(e) => setSurName(e.target.value)}
            required
          />
          <input
            id="Country"
            type="text"
            placeholder="Country"
            className="form__input"
            onChange={(e) => setCountry(e.target.value)}
            required
          />
          <input
            id="Phone"
            type="tel"
            placeholder="Phone"
            className="form__input"
            onChange={(e) => setMobileNumber(e.target.value)}
            required="mdaosi"
          />
          <input
            id="Email"
            type="email"
            placeholder="Email"
            className="form__input"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            id="Password"
            type="password"
            placeholder="Password"
            className="form__input"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="submit">
          <button className="submit2">Login with Google</button>
            <button className="submit2">Register</button>
          </div>
        </div>
      </form>
    </>
  );
}

