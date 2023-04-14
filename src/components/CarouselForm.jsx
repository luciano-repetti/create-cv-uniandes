import React, { useEffect, useState } from "react";
import "../styles/caroucel.css"

export default function CarouselForm() {

  const [caroucel, setCarousel] = useState({slider1: false, slider2: false, slider3: false})
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
        <div className="containerSliders">
          <div className={`slider ${caroucel.slider1 ? "default" : "dissable"}`}>
            <label htmlFor="">
              Nombre/s:
              <input type="text" name="" id="" />
            </label>
            <label htmlFor="">
              Apellido/s:
              <input type="text" name="" id="" />
            </label>
          </div>

          <div className={`slider ${caroucel.slider2 ? "active" : "" || caroucel.slider3 ? "dissable" : ""}`}>
            <label htmlFor="">
              Estudios: 
              <input type="text" name="" id="" />
            </label>
            <label htmlFor="">
              Trabajos: 
              <input type="text" name="" id="" />
            </label>
          </div>

          <div className={`slider ${caroucel.slider3 ? "active" : ""}`}>
            <label htmlFor="">
              Idiomas: 
              <input type="text" name="" id="" />
            </label>
            <label htmlFor="">
              Habilidades: 
              <input type="text" name="" id="" />
            </label>
          </div>

        </div>
        {
          contadorSlider < 4 ?
          <button className="buttonCaroucel" onClick={() => changeCaroucel(`slider${contadorSlider}`)}>Guardar y siguente</button>
          : <button className="buttonCaroucel">Guardar y siguente</button>
        }
      </section>
    </section>
  )
}