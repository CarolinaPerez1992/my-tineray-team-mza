import React from 'react'

export default function Show(props) {

    let {show} = props
    console.log(show)

    return (
    
        <div className='MainShow'>
            <div className='left-mh'>
                <img class='img-mh' src={show.photo} alt={show.name} />
            </div>
            <div className='right-mh'>
                <p>{show.name} </p>
                <p>{show.date}</p>
                <p>Price: U$D{show.price} </p>
            </div>
        </div>
    )}