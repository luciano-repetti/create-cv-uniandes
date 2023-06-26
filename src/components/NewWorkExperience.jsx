import React from "react";

export default function NewWorkExp({ onDelete }) {

    const handleDelete = () => {
        onDelete();
      };

  return (
    <>
      <hr />
      <div className="titleWorkExp">
        <h2>Experencia profesional</h2>
        <button className="buttonIcon" onClick={handleDelete}><img src="./icono-eliminar.png" alt="" /></button>
      </div>
      <div>
        <fieldset>
          <label className="labelSlider company">
            Empresa
            <input type="text" placeholder="Nombre de la empresa" />
          </label>

          <label className="labelSlider labelDate">
            Fecha de inicio
            <input type="text" placeholder="2018-01" />
          </label>

          <label className="labelSlider labelDate">
            Fecha de finalización
            <input type="text" placeholder="2018-01" />
          </label>
        </fieldset>
        <fieldset className="labelSlider checkCharge">
          <input type="checkbox" name="" id="" />
          Actualmente tengo este cargo
        </fieldset>
      </div>
      <fieldset>
        <label className="labelDescription">
          Descripción
          <textarea placeholder="Descripción general de las funciones desempeñadas en la empresa. Una primer experiencia puede ser una práctica profesional, un trabajo temporal o un proyecto de gran relevancia."></textarea>
        </label>
      </fieldset>
    </>
  );
}
