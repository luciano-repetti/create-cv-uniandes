import React, { useState } from "react";
import "../styles/hojaVida.css"
import CreateResume from "../components/CreateResume";

export default function Perfil() {

  const [active, setActive] = useState(false)

  function changeActive(){
    setActive(!active)
  }

  return (
    <>
        {
            active ?
            <CreateResume functionStateActive={changeActive} /> :
            <section className="containerHoja">
                <article className="containerCreate">
                    <h2>Hoja de vida</h2>
                    <button className="createCv" onClick={() => setActive(!active)}>Crear hoja de vida</button>
                </article>
                <article className="hojasDeVida">
                    <h3>Mi hoja de vida</h3>
                    <section className="cvs">
                        <img className="iconoCv" src="http://localhost:3000/Icono-hoja-vacia.png" />
                        <p>No tienes hojas de vida creadas</p>
                    </section>
            </article>
            </section>
        }
    </>
  )

}