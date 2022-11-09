import React from 'react'
import { useParams } from 'react-router';
import hotels from "../data/hotels";
import hotelShow from "../data/hotelShow"
import Show from "../components/Show"
import NotElementFound from "../components/NotElementFound"

export default function DetailHotel() {

    const { id } = useParams()
    console.log(id)
    let hotel = hotels.find(hotel=> hotel.id === id)

    let show = hotelShow.filter(show =>show.hotelId === id)
    console.log(show)

  return (
    <div className='cardDetailsCity'>

        <div className='imagenCardDetails'>
            <img src={hotel.photo[0]} alt="" />
        </div>
        <div className='informacionCardDetails'>

            <h3>{hotel.name}</h3>
            <p>This places is ubicated in {hotel.price} U$D</p>
            <p>Have a population of {hotel.date} date.</p>
            <button>Comentarios</button>
        </div>

        <div className='cardDetailsCity'>
           { show.length > 0?(
           show.map(e=><Show key= {e.id} show={e}/>)):(
            <NotElementFound/>
           )
        }

    </div>
    </div>
  )
}