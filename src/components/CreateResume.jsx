import React, { useState } from "react";
import Steps from "./Steps";
import "../styles/createResume.css";
import CarouselForm from "./CarouselForm";

export default function CreateResume(props) {
  const [rol, setRol] = useState({ egresado: false, profesional: false });

  function changeRol(rols) {
    if (!rol[rols]) {
      setRol({
        [rols]: !rol[rols],
      });
    }
  }

  function changeStateActive() {
    props.functionStateActive();
  }

  return (
    <section className="createResume">
        <div className="containerH2">
            <h2 className="subtitleCv" onClick={() => changeStateActive()}>
            <img className="arrowLeft" src="http://localhost:3000/icono-volver.png" /> Crear hoja de vida
            </h2>
        </div>
        <article className="containerCreateCv">
            <Steps></Steps>
            <article className="containerRol">
                <h3>Selecciona tu rol</h3>
                <div className="containerButton">
                <button
                    className="buttonSimple"
                    onClick={() => changeRol("egresado")}
                >
                    Egresado
                </button>
                <button
                    className="buttonSimple"
                    onClick={() => changeRol("profesional")}
                >
                    Profesional consolidado
                </button>
                </div>
                </article>
            {rol.egresado ? <CarouselForm /> : null}
            {rol.profesional ? <CarouselForm /> : null}
        </article>
    </section>
  );
}
