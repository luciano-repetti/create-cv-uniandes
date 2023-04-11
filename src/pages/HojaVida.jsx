import React from "react";
import "../styles/hojaVida.css"

export default function Perfil() {
  // ScrollToTop();

  return (
    <>
        <section className="containerHoja">
            <article className="containerCreate">
                <h2>Hoja de vida</h2>
                <button className="createCv" type="submit">Crear hoja de vida</button>
            </article>
        <article className="hojasDeVida">
            <h3>Mi hoja de vida</h3>
            <section className="cvs">
                <div className="iconoCv">
                    icono
                </div>
                <p>No tienes hojas de vida creadas</p>
            </section>
        </article>
        </section>
    </>
  )

}