import React from "react";

export default function AddUndergraduate({ onDelete }) {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <>
      <div className="titleWorkExp">
        <h2>Programa de pregrado</h2>
        <button className="buttonIcon" onClick={handleDelete}>
          <img src="./icono-eliminar.png" alt="" />
        </button>
      </div>
      <fieldset>
        <label className="labelDescription">
          <input
            tabIndex={0}
            type="text"
            placeholder="Nombre del pregrado"
            name=""
          />
        </label>
      </fieldset>
      <fieldset style={{ display: "flex" }}>
        <label className="labelSlider company">
          Universidad
          <input type="text" placeholder="Nombre de la universidad" />
        </label>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: "1em" }}>
            <label className="labelSlider labelDate">
              Fecha de inicio
              <input type="text" placeholder="2010-01" />
            </label>

            <label className="labelSlider labelDate">
              Fecha de finalización
              <input type="text" placeholder="2015-01" />
            </label>
          </div>

          <label className="labelSlider checkCharge">
            <input type="checkbox" name="" id="" />
            Actualmente lo curso
          </label>
        </div>
      </fieldset>
    </>
  );
}
