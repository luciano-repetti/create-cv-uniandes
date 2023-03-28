import React, { useState, useEffect } from "react";
import "../styles/form.css"
import Select from "./Select";

export default function Register() {
  const [birthdate, setBirthdate] = useState("");
  const [selects, setSelects] = useState([])
  const [formData, setFormData] = useState([])

  function handleChange(event) {
    let value = event.target.value;

    // Remove any non-numeric character from the input value
    value = value.replace(/[^\d]/g, "");

    // Add a slash after the day
    if (value.length > 2 && value.charAt(2) !== "/") {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }

    // Add a slash after the month
    if (value.length > 5 && value.charAt(5) !== "/") {
      value = `${value.slice(0, 5)}/${value.slice(5)}`;
    }

    setBirthdate(value);
  }

  function handleSelectChange(value, id) {
    // const dataSelect = {}

    setSelects(prevState => ([
      ...prevState,
      {[id]: value}
    ]))

    // dataSelect[id] = value
    // setSelects(dataSelect)
  }

  function handleSubmit(event){
    event.preventDefault()

    const [identifier, upe, gender] = selects

    setFormData([
      {[event.target[1].id]: event.target[1].value.toLowerCase().trim()},
      {[event.target[2].id]: event.target[2].value.toLowerCase().trim()},
      {[identifier["identifier"]]: event.target[4].value.toLowerCase().trim()},
      {[event.target[6].id]: event.target[6].value.toLowerCase().trim()},
      {[event.target[8].id]: event.target[8].value.toLowerCase().trim()},
      {[event.target[10].id]: event.target[10].value.toLowerCase().trim()},
      {[event.target[11].id]: event.target[11].value.toLowerCase().trim()},
      upe,
      gender
    ])    
  }

  useEffect(() =>{
    if(formData.length != 0){
      console.log(formData);
    }
  }, [formData])

  return (

    <article className="formCredentials">
      <h2>Bienvenido</h2>
      <h3>¡Encuentra tu futuro ahora, pasa al siguiente nivel con nuestra herramienta!</h3>
      <form className="registerForm" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="name">
            Nombres
            <input
              tabIndex={0}
              type="text"
              placeholder="Tus nombres"
              name=""
              id="name"
            />
          </label>

          <label htmlFor="lastName">
            Apelidos
            <input
              tabIndex={0}
              type="text"
              placeholder="Tus apellidos"
              name=""
              id="lastName"
            />
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="identifier">
            Identificación
            <Select options={["Cédula de identificación", "Pasaporte", "Código uniandes"]} onSelectChange={handleSelectChange} _id={"identifier"} />
          </label>

          <label htmlFor="email">
            Número de identificación
            <input
              tabIndex={0}
              type="text"
              placeholder="Escribir número"
              name=""
              id="numberIdentification"
            />
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="upe">
            Último programa de egreso
            <Select options={["Opción 1", "Opción 2", "Opción 3"]} onSelectChange={handleSelectChange} _id={"upe"} />
          </label>

          <label htmlFor="email">
            Correo
            <input
              tabIndex={0}
              type="email"
              placeholder="example@uniandes.com"
              name=""
              id="email"
            />
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="birthdate">
            Fecha de nacimiento
            <input
              tabIndex={0}
              type="text"
              placeholder="DD/MM/AAAA"
              name="fechaNacimiento"
              value={birthdate}
              onChange={handleChange}
              id="birthdate"
            />
          </label>

          <label htmlFor="gender">
            Género
            <Select options={["Femenino", "Masculino", "Otro"]} onSelectChange={handleSelectChange} _id={"gender"} />
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="password">
            Contraseña
            <input
              tabIndex={0}
              type="password"
              placeholder="ingrese su contraseña"
              name=""
              id="password"
            />
          </label>

          <label htmlFor="confirmPassword">
            Confirmar contraseña
            <input
              tabIndex={0}
              type="password"
              placeholder="ingrese nuevamente su contraseña"
              name=""
              id="confirmPassword"
            />
          </label>
        </fieldset>

        <label htmlFor="tcp" className="labelCheckbox">
          <input tabIndex={0} type="checkbox" name="" id="tcp" />
          Acepto Términos y condiciones y Protección de datos
        </label>

        <button type="submit">Ingresar</button>

        <a href="">¿Ya tienes una cuenta? <label className="bold">Inicia sesión</label></a>
      </form>
    </article>

  );
}
