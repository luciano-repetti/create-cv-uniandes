import React, { useState } from "react";
import Select from "./Select";

export default function Register() {
  const [birthdate, setBirthdate] = useState("");

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

  return (

    <article className="formCredentials">
      <h2>Bienvenido</h2>
      <h3>¡Encuentra tu futuro ahora, pasa al siguiente nivel con nuestra herramienta!</h3>
      <form className="registerForm">
        <fieldset>
          <label htmlFor="name">
            Nombres
            <input
              type="text"
              placeholder="Ingrese su nombre/s"
              name=""
              id="name"
            />
          </label>

          <label htmlFor="lastName">
            Apelidos
            <input
              type="text"
              placeholder="Ingrese su apellido/s"
              name=""
              id="lastName"
            />
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="identifier">
            Identificación
            <Select options={["Cédula de identificación", "Pasaporte", "Código uniandes"]} />
          </label>

          <label htmlFor="email">
            Correo institucional
            <input
              type="email"
              placeholder="example@uniandes.edu.co"
              name=""
              id="email"
            />
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="upe">
            Último programa de egreso
            <Select options={["Opción 1", "Opción 2", "Opción 3"]} />
          </label>

          <label htmlFor="emailStaff">
            Correo personal
            <input
              type="email"
              placeholder="example@outlook.com"
              name=""
              id="emailStaff"
            />
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="birthdate">
            Fecha de nacimiento
            <input
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
            <Select options={["Femenino", "Masculino", "Otro"]} />
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="password">
            Contraseña
            <input
              type="password"
              placeholder="ingrese su contraseña"
              name=""
              id="password"
            />
          </label>

          <label htmlFor="confirmPassword">
            Confirmar contraseña
            <input
              type="password"
              placeholder="ingrese nuevamente su contraseña"
              name=""
              id="confirmPassword"
            />
          </label>
        </fieldset>

        <label htmlFor="tcp" className="labelCheckbox">
          <input type="checkbox" name="" id="tcp" />
          Acepto Términos y condiciones y Protección de datos
        </label>

        <button type="submit">Ingresar</button>

        <a href="">¿Ya tienes una cuenta? Inicia sesión</a>
      </form>
    </article>

  );
}
