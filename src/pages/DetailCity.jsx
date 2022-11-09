import React from 'react'
import { useParams } from 'react-router';
import dataCity from "../data/dataCity";
import events from "../data/events"
import Itinerary from "../components/Itinerary"
import NotElementFound from "../components/NotElementFound"

export default function DetailCity() {

    const { id } = useParams()
    console.log(id)
    let city = dataCity.find(city=> city.id === id)

    let event = events.filter(event =>event.citiId === id)
    console.log(event)

  return (
    <div className='cardDetailsCity'>

        <div className='imagenCardDetails'>
            <img src={city.photo} alt="" />
        </div>
        <div className='informacionCardDetails'>

            <h3>{city.name}</h3>
            <p>This places is ubicated in {city.continent}.</p>
            <p>Have a population of {city.population} peoples.</p>
            <button>Comentarios</button>
        </div>

        <div className='cardDetailsCity'>
           { event.length > 0?(
            event.map(e=> <Itinerary key= {e.id} event={e}/>)
           ):(
            <NotElementFound/>
           )
        }

    </div>
    </div>
  )
}