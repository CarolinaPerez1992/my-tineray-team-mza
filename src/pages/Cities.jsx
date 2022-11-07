import React from 'react'
import Layout from '../layout/Layout'
import CityCard from '../components/CityCard'
import dataCity from '../data/dataCity'
import { useRef, useState } from 'react'
import FormCity from '../components/FormCity'

export default function Cities() {
  let [ciudadesFiltradas, setCiudadesFiltradas] = useState([])
  console.log(ciudadesFiltradas)
    const America = useRef()
    const Europa = useRef()
    const Asia = useRef()
    const Oceania = useRef()
    const searchId = useRef()

    let continentes = [ America, Europa, Asia, Oceania]

  let checkContinent = [...new Set(dataCity.map((ciudad) => ciudad.continent))]

  function filterCheckCards(){
    let checkFiltered = filterCheck()
    console.log(checkFiltered)
    let searchFiltered = filterSearch(checkFiltered)
    console.log(searchFiltered)
    setCiudadesFiltradas(searchFiltered)
    console.log(setCiudadesFiltradas)
    localStorage.setItem('ciudadesFiltradas', JSON.stringify(searchFiltered))
}

function filterCheck(){
    let checks = []
    continentes.filter((continente) => continente.current?.checked).map((continente) => checks.push(continente.current.value))
    let ciudadesFiltradas = dataCity.filter((ciudad) => checks.includes(ciudad.continent))
    console.log(checks.length)
    if(checks.length === 0){
      console.log(dataCity)
        return dataCity 
        
        
    }
    return ciudadesFiltradas
}

function filterSearch(array){
    if(searchId.current.value !== ''){
        let ciudadesFiltradas = array.filter((ciudad) => ciudad.name.toLowerCase().includes(searchId.current.value.toLowerCase()))
        return ciudadesFiltradas
    }else{
        return array
    }
}
return (
  <Layout>
    <div className="filter">
    <div className="check">
      {checkContinent.map( (continent, index)  => {
        return <FormCity id={index} continent={continent} valor={continent} refId={continentes[index]} fx={filterCheckCards}/>
      })}
    </div>
    <div className="search">
      <input type="text" placeholder="Search" ref={searchId} onChange={filterCheckCards} />
    </div>
    </div>
    <div className="cont-card">
     {ciudadesFiltradas.map((cadaCity,id) => <CityCard datos={cadaCity} key={id} />)}
     </div>
  </Layout>
)
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
