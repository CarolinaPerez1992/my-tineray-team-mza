import React from 'react'

export default function Itinerary(props) {

    let {event} = props

    return (
    
        <div className='MainShow'>
            <div className='left-mh'>
                <img class='img-mh' src={event.photo[0]} alt={event.name} />
            </div>
            <div className='right-mh'>
                <p>{event.name} </p>
                <p>{event.description}</p>
                <p>Price: U$D{event.price} </p>
            </div>
        </div>
    )}