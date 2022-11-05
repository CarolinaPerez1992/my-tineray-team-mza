import React from "react";
import Boton from "./Boton";
import cities from "../data/dataCity";
import hotels from "../data/hotels";
import { useState, useEffect } from "react";
import "../carousel.css";

export default function Carousel(props) {
  let [numberOfChange, setNumberOfChange] = useState(0);
  let [id, setId] = useState(0);
  let next = () => {
    if (numberOfChange + 2 < hotels.length - 1) {
      setNumberOfChange(numberOfChange + 1);
    } else {
      setNumberOfChange(0);
    }
    clearInterval(id);
  };
  let prev = () => {
    if (numberOfChange === 0) {
      setNumberOfChange(cities.length - 3);
    } else {
      setNumberOfChange(numberOfChange - 1);
    }
    clearInterval(id);
  };
  useEffect(() => {
    let idInterval = setInterval(() => {
      next();
    }, 5000);
    setId(idInterval);
    return clearInterval(id);
  }, [numberOfChange]);

  return (
    <div className="general">
      <div className="caja1">
        <h2>CITIES</h2>
        <div className="conteinerCarousel">
          <Boton icon={"<"} onClick={prev} />
          <div className="carousel">
            <img
              src={cities[numberOfChange].photo}
              alt="sujeto"
              className="photoCarrusel"
            />
            <img
              src={cities[numberOfChange + 1].photo}
              alt="sujeto"
              className="photoCarrusel"
            />
            <img
              src={cities[numberOfChange + 2].photo}
              alt="sujeto"
              className="photoCarrusel"
            />
          </div>
          <Boton icon={">"} onClick={next} />
        </div>
      </div>
      <div className="caja2">
        <h2>HOTELS</h2>
        <div className="conteinerCarousel">
          <Boton icon={"<"} onClick={prev} />
          <div className="carousel">
            <img
              src={hotels[numberOfChange + 2].photo[0]}
              alt="sujeto"
              className="photoCarrusel"
            />
            <img
              src={hotels[numberOfChange + 2].photo[1]}
              alt="sujeto"
              className="photoCarrusel"
            />
            <img
              src={hotels[numberOfChange + 2].photo[2]}
              alt="sujeto"
              className="photoCarrusel"
            />
          </div>
          <Boton icon={">"} onClick={next} />
        </div>
      </div>
    </div>
  );
}

/*
import React from "react";
import Boton from "./Boton";
import { useState, useEffect } from "react";
import "./index.css";

export default function Carousel(props) {}

/*import React, { useState, useEffect } from "react";
import Boton from "./Boton";
export default function Carousel() {
  let [ciudades, setCiudades] = useState([]); //dataCity
  let [hoteles, setHoteles] = useState([]); //events
  let [tourist, setTourist] = useState([]); //hotels
  let [events, setEvents] = useState([]); //hotelshows
  let [photosCarouselCiudades, setPhotosCiudades] = useState([]); //dataCity
  let [photosCarouselHoteles, setPhotosHoteles] = useState([]); //events
  let [photosCarouselTourist, setPhotosTourist] = useState([]); //hotels
  let [photosCarouselEvents, setPhotosEvents] = useState([]); //hotelshows
  let [numeroCambiante, setNumeroCambiante] = useState(0);
  let [photosCarouselAll, setPhotosAll] = useState([]);
  useEffect(() => {
   
   
   /* let idInterval = setInterval(() => {
      siguiente();
    }, 5000);
    return () => clearInterval(idInterval);
  }, [numeroCambiante]);*/
/*

    fetch("./dataCity.json") //setdataCity
      .then((response) => console.log(response.json()))
      .then((response) => setCiudades(response));
    

    
    
    fetch("../places.json") //setdataCity
      .then((response) => response.json())
      .then((response) => setHoteles(response));
    
    
    fetch("../tourist.json") //setEvents
      .then((response) => response.json())
      .then((response) => setTourist(response));
    
    
    fetch("../events.json") // setHotelsShows
      .then((response) => response.json())
      .then((response) => setEvents(response));
  


  function numeroRandom(numero) {
    return Math.floor(Math.random() * numero)
  }


  setPhotosHoteles = hoteles.map(hotel => {
    if (photosCarouselHoteles.length <4 && !photosCarouselHoteles.includes(hotel.photo)) {
      photosCarouselHoteles.push(hotel.photo[numeroRandom(hotel.photo.length - 1)])
    }
  })

  setPhotosTourist = tourist.map(lugar => {
    if (photosCarouselTourist.length <4 && !photosCarouselTourist.includes(lugar.photo)) {
      photosCarouselTourist.push(lugar.photo[numeroRandom(lugar.photo.length - 1)])
    }
  })
  

setPhotosCiudades = ciudades.map(() => {
  let ciudadAleatoria = numeroRandom(ciudades.length - 1)
  if (photosCarouselCiudades.length <4 && !photosCarouselCiudades.includes(ciudades[ciudadAleatoria].photo)) {
    photosCarouselCiudades.push(ciudades[ciudadAleatoria].photo)
  }

setPhotosEvents = events.map(() => {
    let eventsAleatorio = numeroRandom(events.length - 1)
    if (photosCarouselEvents.length<4 && !photosCarouselEvents.includes(events[eventsAleatorio].photo)) {
      photosCarouselEvents.push(events[eventsAleatorio].photo)
    }


    if (photosCarouselAll.length<4) {
      setPhotosAll = photosCarouselAll.push(photosCarouselCiudades, photosCarouselHoteles, photosCarouselTourist, photosCarouselEvents)
    }

    let anterior = () => {
      if (photosCarouselAll.length<4) {
        setPhotosAll = photosCarouselAll.push(photosCarouselCiudades, photosCarouselHoteles)
      }
      if (numeroCambiante !== 0) {
        setNumeroCambiante(--numeroCambiante)
      } else {
        setNumeroCambiante(photosCarouselAll.length - 1)
      }
    }
    let siguiente = () => {
      if (photosCarouselAll.length<2) {
        setPhotosAll = photosCarouselAll.push(photosCarouselCiudades, photosCarouselHoteles)
      } if (numeroCambiante !== photosCarouselAll.length - 1) {
        setNumeroCambiante(++numeroCambiante)
      } else {
        setNumeroCambiante(0)
      }
    }
  
    return (
      <>
        <div className="flex column justify-center gap-2">
          <div className="flex justify-center p-2">
            <div className="flex justify-center w80 wrap gap-2">
              {
                photosCarouselAll[numeroCambiante].map((photo) => {
                  return (
                    <img width="300px" src={photo} alt="foto" />
                  )
                })
              }
            </div>
          </div>
          <div className="flex justify-center align-center gap-1">

            <Boton verbo="anterior" function={anterior} />
            <Boton verbo="siguiente" function={siguiente} />
                        
          </div>;

        </div>
      </>
    */
