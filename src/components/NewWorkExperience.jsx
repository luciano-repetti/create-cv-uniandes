import React from "react";
import { Information } from "./Information";

export default function NewWorkExp({ onDelete }) {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <>
      <hr />
      <div className="titleWorkExp">
        <h2>Experencia profesional</h2>
        <button className="buttonIcon" onClick={handleDelete}>
          <img src="./icono-eliminar.png" alt="" />
        </button>
      </div>
      <fieldset style={{ display: "flex" }}>
        <label className="labelSlider company">
          Empresa
          <input type="text" placeholder="Nombre de la empresa" />
        </label>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: "1em" }}>
            <label className="labelSlider labelDate">
              Fecha de inicio
              <input type="text" placeholder="2018-01" />
            </label>

            <label className="labelSlider labelDate">
              Fecha de finalización
              <input type="text" placeholder="2022-02" />
            </label>
          </div>

          <label className="labelSlider checkCharge">
            <input type="checkbox" name="" id="" />
            Actualmente lo curso
          </label>
        </div>
      </fieldset>
      <fieldset>
        <div className="labelDescription">
          <div style={{display: 'flex', alignItems: 'center', gap: '1em'}}>
            Descripción <Information textDesc={"Recuerda que la hoja de vida se escribe siempre en tercera persona."} />
          </div>
          <textarea placeholder="Descripción general de las funciones desempeñadas en la empresa. Una primer experiencia puede ser una práctica profesional, un trabajo temporal o un proyecto de gran relevancia."></textarea>
        </div>
      </fieldset>
    </>
  );
}
