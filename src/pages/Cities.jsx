import React from "react";
import CityCard from "../components/CityCard";
import { useRef, useState } from "react";
import FormCity from "../components/FormCity";
import { useEffect } from "react";
import axios from "axios";
import {baseURL} from "../url"
import NotElementFound from "../components/NotElementFound"

export default function Cities() {
  let [ciudades, setCiudades] = useState([])
  let [ciudadesFiltradas, setCiudadesFiltradas] = useState([]);
  let [checkboxes, setCheckBoxes] = useState([])
  const searchId= useRef()
  
  useEffect(() => {
    axios.get(`${baseURL}api/cities`)
        .then(response => setCiudades(response.data.data))

    axios.get(`${baseURL}api/cities`)
        .then(response => setCiudadesFiltradas(response.data.data))
}, []) 

  let checkContinent = [...new Set(ciudades.map((ciudad) => ciudad.continent))];

  // function filterCheckCards() {
  //   let checkFiltered = filterCheck();
  //   let searchFiltered = filterSearch(checkFiltered);
  //   setCiudadesFiltradas(searchFiltered);
  //   localStorage.setItem("ciudadesFiltradas", JSON.stringify(searchFiltered));
  // }

  function filterSearch(cityFil) {
    // if (searchId.current.value !== "") {
    //   let ciudadesFiltradas = array.filter((ciudad) =>
    //     ciudad.name.toLowerCase().includes(searchId.current.value.toLowerCase())
    //   );
    //   return ciudadesFiltradas;
    // } else {
    //   return array;
    // }
    let check = filterCheck(cityFil)
        let url = check.map( (continent) => `continent=${continent}`).join('&');
        axios.get(`${baseURL}api/cities?${url}&name=${searchId.current.value}`)
        .then(response => setCiudadesFiltradas(response.data.data))
  }

  function filterCheck(check) {
    let checks = [];
    // continentes
    //   .filter((continente) => continente.current?.checked)
    //   .map((continente) => checks.push(continente.current.value));
    // let ciudadesFiltradas = ciudades.filter((ciudad) =>
    //   checks.includes(ciudad.continent)
    // );
    // console.log(checks.length);
    if (check.target.checked) {
      checks = [...checkboxes, check.target.value]
      
    } else{
      checks = checkboxes.filter((checkbox) => checkbox !== check.target.value)
    }
    setCheckBoxes(checks)
    return checks;
  }
//   function checksFilter(event) {
//     let arrayCheck = [];
//     if (event.target.checked) {
//       arrayCheck = [...checkboxes, event.target.value];
//     } else {
//       arrayCheck = checkboxes.filterSearch((e) => e !== event.target.value);
//     }
//     setCheckboxes(arrayCheck);
//     return arrayCheck;
// }


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
                // refId={continentes[index]}
                fx={filterSearch}
              />
            );
          })}
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
        {ciudadesFiltradas.length > 0 ? (ciudadesFiltradas.map((cadaCity, id) => {
          return <CityCard datos={cadaCity} key={id} id={cadaCity._id}/>
})):(<NotElementFound/>)
}
      </div>
    </>
  );
}

// import React from "react";
// import Layout from "../layout/Layout";
// import CityCard from "../components/CityCard";
// import ity from "../data/dataCity";

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
