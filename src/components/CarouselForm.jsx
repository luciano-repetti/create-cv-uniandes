import React, { useEffect, useState } from "react";
import {Slider1, Slider2, Slider3, Slider4} from "./Slider";
// import "../styles/caroucel.css"

export default function CarouselForm() {

  const [caroucel, setCarousel] = useState({slider1: false, slider2: false, slider3: false, slider4: false})
  const [contadorSlider, setContadorSlider] = useState(1)

  function changeCaroucel(caroucels){
    if(!caroucel[caroucels]){
      setCarousel({
        [caroucels]: !caroucel[caroucels]
      })
      setContadorSlider(contadorSlider + 1)
    }
  }

  useEffect(() => {
    changeCaroucel(`slider${contadorSlider}`)
  }, [])

  return (
    <section className="containerCarousel">
      <section className="carousel">
        <div className={`containerSliders slider${contadorSlider}`}>
          
          <Slider1 slider={caroucel} />

          <Slider2 slider={caroucel} />

          <Slider3 slider={caroucel} />

          <Slider4 slider={caroucel} />

        </div>
        {
          contadorSlider < 5 ?
          <button className="buttonCaroucel" onClick={() => changeCaroucel(`slider${contadorSlider}`)}>Guardar y siguente</button>
          : <button className="buttonCaroucel">Guardar y siguente</button>
        }
      </section>
    </section>
  )
}