import React, { useState } from "react";

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
    <article>
      <input type="text" placeholder="Ingrese su nombre/s" name="" id="name" />
      <input
        type="text"
        placeholder="Ingrese su apellido/s"
        name=""
        id="lastname"
      />
      <input
        type="number"
        placeholder="Ingrese su código uniandes"
        name=""
        id=""
      />
      <select  name="Ultimo programa de egreso" defaultValue="" id="">
        <option value={""} disabled>
          Ultimo programa de egreso
        </option>
        <option value="pe1">Programa1</option>
        <option value="pe2">Programa2</option>
        <option value="pe3">Programa3</option>
      </select>
      <input
        type="text"
        placeholder="DD/MM/AAAA"
        name={"fechaNacimiento"}
        value={birthdate}
        onChange={handleChange}
        id="fechaNacimiento"
      />
      <label>
        <input type="radio" value={"masculino"} name="sexo" id="" />
        masculino
      </label>
      <label>
        <input type="radio" value={"femenino"} name="sexo" id="" />
        femenino
      </label>
      <label>
        <input type="radio" value={"otro"} name="sexo" id="" />
        otro
      </label>
      <input type="email" placeholder="Ingrese su email" name="" id="" />
      <input
        type="password"
        placeholder="ingrese su contraseña"
        name=""
        id="password"
      />
      <input
        type="password"
        placeholder="ingrese nuevamente su contraseña"
        name=""
        id="confirmPassword"
      />
    </article>
  );
}
