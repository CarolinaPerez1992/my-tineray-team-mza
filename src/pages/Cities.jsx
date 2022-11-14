import React from "react";
import CityCard from "../components/CityCard";
import { useRef, useState } from "react";
import FormCity from "../components/FormCity";
import { useEffect } from "react";
import axios from "axios";
import {baseURL} from "../url"

export default function Cities() {
  let [ciudades, setCiudades] = useState([])
  let [ciudadesFiltradas, setCiudadesFiltradas] = useState([]);
  
  const America = useRef();
  const Europa = useRef();
  const Asia = useRef();
  const Oceania = useRef();
  const searchId = useRef();

  let continentes = [America, Europa, Asia, Oceania];

  useEffect(() => {
    axios.get(`${baseURL}api/cities`)
        .then(response => setCiudades(response.data.data))

    axios.get(`${baseURL}api/cities`)
        .then(response => setCiudadesFiltradas(response.data.data))
}, []) 

  let checkContinent = [...new Set(ciudades.map((ciudad) => ciudad.continent))];

  function filterCheckCards() {
    let checkFiltered = filterCheck();
    console.log(checkFiltered);
    let searchFiltered = filterSearch(checkFiltered);
    console.log(searchFiltered);
    setCiudadesFiltradas(searchFiltered);
    console.log(setCiudadesFiltradas);
    localStorage.setItem("ciudadesFiltradas", JSON.stringify(searchFiltered));
  }

  function filterCheck() {
    let checks = [];
    continentes
      .filter((continente) => continente.current?.checked)
      .map((continente) => checks.push(continente.current.value));
    let ciudadesFiltradas = ciudades.filter((ciudad) =>
      checks.includes(ciudad.continent)
    );
    console.log(checks.length);
    if (checks.length === 0) {
      console.log(ciudades);
      return ciudades;
    }
    return ciudadesFiltradas;
  }

  function filterSearch(array) {
    if (searchId.current.value !== "") {
      let ciudadesFiltradas = array.filter((ciudad) =>
        ciudad.name.toLowerCase().includes(searchId.current.value.toLowerCase())
      );
      return ciudadesFiltradas;
    } else {
      return array;
    }
  }
  return (
    <>
      <div className="filter">
        <div className="check">
          {checkContinent.map((continent, index) => {
            return (
              <FormCity
                id={index}
                continent={continent}
                valor={continent}
                refId={continentes[index]}
                fx={filterCheckCards}
              />
            );
          })}
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            ref={searchId}
            onChange={filterCheckCards}
          />
        </div>
      </div>
      <div className="cont-card">
        {ciudadesFiltradas.map((cadaCity, id) => {
          return <CityCard datos={cadaCity} key={id} />
})}
      </div>
    </>
  );
}

// import React from "react";
// import Layout from "../layout/Layout";
// import CityCard from "../components/CityCard";
// import DataCity from "../data/dataCity";

// export default function Cities() {
//   return (
//     <Layout>
//       <div className="cont-card">
//         {DataCity.map((cadaPerfil, id) => (
//           <CityCard datos={cadaPerfil} key={id} />
//         ))}
//       </div>
//     </Layout>
//   );
// }
