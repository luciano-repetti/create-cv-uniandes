import React, { useState } from "react";
import Select from "./Select";
import Addition from "./atoms/Addition";
import NewWorkExp from "./NewWorkExperience";

export function Slider1(props) {
  const slider = props.slider;

  return (
    <div className={`slider ${slider.slider1 ? "default" : "dissable"}`}>
      <div className="containerForm">
        <hr />
        <fieldset>
          <img className="photoLoad" src="./usuario_vacio.png" alt="" />
          <div className="loadPhoto">
            <p style={{ display: "flex" }}>
              <p className="bold">Foto</p>(opcional)
            </p>
            <p className="greyish">600 x 600 recomendado</p>
            <button className="buttonLoad">Cargar ahora</button>
          </div>
        </fieldset>
        <hr />
        <h2>Datos personales</h2>
        <fieldset>
          <label className="labelSlider">
            Nombre y apellido completos
            <input
              tabIndex={0}
              type="text"
              placeholder="Escribe tus datos aquí"
              name=""
            />
          </label>

          <label className="labelSlider">
            correo electronico
            <input
              tabIndex={0}
              type="text"
              placeholder="example@uniandes.edu.co"
              name=""
            />
          </label>
        </fieldset>

        <fieldset>
          <label className="labelSlider">
            URL LinkedIn
            <input
              tabIndex={0}
              type="text"
              placeholder="Escribe tus datos aquí"
              name=""
            />
          </label>

          <label className="labelSlider">
            Celular
            <input
              tabIndex={0}
              type="text"
              placeholder="310 458 6898"
              name=""
            />
          </label>
        </fieldset>

        <fieldset>
          <label className="labelSlider">
            País
            <Select
              indexZ={"25"}
              options={["Colombia", "Argentina", "Chile"]}
              _id={"pais"}
            />
          </label>

          <label className="labelSlider">
            Ciudad
            <Select
              indexZ={"25"}
              options={["Bogotá D.C", "Medellín", "Cartegena"]}
              _id={"ciudad"}
            />
          </label>
        </fieldset>
      </div>
    </div>
  );
}

export function Slider2(props) {
  const slider = props.slider;

  const handleDeleteWorkExp = (index) => {
    setWorkExpForms((prevForms) => {
      const updatedForms = [...prevForms];
      updatedForms.splice(index, 1);
      return updatedForms;
    });
  };

  const [workExpForms, setWorkExpForms] = useState([
    <NewWorkExp key={0} onDelete={handleDeleteWorkExp} />,
  ]);

  const addWorkExpForm = () => {
    const newFormKey = workExpForms.length;
    setWorkExpForms((prevForms) => [
      ...prevForms,
      <NewWorkExp key={newFormKey} onDelete={handleDeleteWorkExp} />,
    ]);
  };

  return (
    <div
      className={`slider ${
        slider.slider2 ? "active" : "" || slider.slider3 ? "dissable" : ""
      }`}
    >
      <div className="containerForm">
        <h2>Perfil profesional</h2>
        <fieldset>
          <label className="labelDescription">
            <textarea
              className="resumeWork"
              placeholder="Resumen ejecutivo corto donde se detalla la formación académica, la Universidad de grado, Idiomas, habilidades o conocimientos y competencias Ej: Análisis, liderazgo, tolerancia a la frustración, adaptabilidad y relacionamiento."
            ></textarea>
          </label>
        </fieldset>

        {workExpForms}
        <Addition
          text={"Adicionar nueva experiencia profesional"}
          onClick={addWorkExpForm}
        />
      </div>
    </div>
  );
}
