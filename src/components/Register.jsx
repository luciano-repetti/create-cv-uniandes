import React, { useState, useEffect } from "react";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import userActions from "../store/users/actions";
import "../styles/form.css"
import Select from "./Select";
import validator from "./Validator";

export default function Register() {
  const [birthdate, setBirthdate] = useState("")
  const [selects, setSelects] = useState({gender: "", identifier: "", upe: ""})
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

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
    setSelects(prevState => ({
      ...prevState,
      [id]: value
    }
    ))
  }

  function handleSubmit(event){
    event.preventDefault()

    let divDate = event.target[8].value.toLowerCase().trim().split("/")
    let day = divDate[0];
    let month = divDate[1];
    let year = divDate[2];

    const dateFormatted = year + "-" + month + "-" + day

    
    const erroresForm = {
      name: validator("name", event.target[1].value.toLowerCase().trim()),
      lastName: validator("lastName", event.target[2].value.toLowerCase().trim()),
      type: validator("select", selects.identifier.toLowerCase()),
      upe: validator("select", selects.upe.trim()),
      gender: validator("select", selects.gender.toLowerCase()),
    }

    const allEmpty = Object.values(erroresForm).every(error => error === "")

    setErrors(erroresForm)

    if(allEmpty){
      const userData = {
        email: event.target[6].value.toLowerCase().trim(),
        password: event.target[10].value.trim(),
        passwordConfirmation: event.target[11].value.trim(),
        fullName: event.target[1].value.toLowerCase().trim() + " " + event.target[2].value.toLowerCase().trim(),
        type: selects.identifier.toLowerCase(),
        code: event.target[4].value.toLowerCase().trim(),
        last_program: 2,
        dob: dateFormatted,
        gender: selects.gender.toLowerCase(),
      }
      setFormData(userData)
    }
  }

  const user = useSelector(store => store.user)

  const {userSignUp} = userActions
  const dispatch = useDispatch()

  useEffect(() =>{
    if(Object.keys(formData).length !== 0){
      console.log(formData);
      dispatch(userSignUp(formData))
    }
  }, [formData])

  useEffect(() =>{
    if(user && (Object.keys(user.user).length > 0)){
      navigate('/perfil');
    }
  }, [user])

  return (

    <article className="formCredentials">
      <h2>Bienvenido</h2>
      <h3>¡Encuentra tu futuro ahora, pasa al siguiente nivel con nuestra herramienta!</h3>
      <form className="registerForm" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="name">
            Nombres
            <input
            className={errors.name && "error"}
              tabIndex={0}
              type="text"
              placeholder="Tus nombres"
              name=""
              id="name"
            />
            {errors.name && <p className="messageError">{errors.name}</p>}
          </label>

          <label htmlFor="lastName">
            Apelidos
            <input
              className={errors.lastName && "error"}
              tabIndex={0}
              type="text"
              placeholder="Tus apellidos"
              name=""
              id="lastName"
            />
            {errors.lastName && <p className="messageError">{errors.lastName}</p>}
          </label>
        </fieldset>


        <fieldset>
          <label htmlFor="identifier">
            Identificación
            <Select indexZ={"25"} error={errors.type && errors.type} options={["Cédula de identificación", "Pasaporte", "Código uniandes"]} onSelectChange={handleSelectChange} _id={"identifier"} />
            {errors.type && <p className="messageError">{errors.type}</p>}
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
            <Select indexZ={"20"} error={errors.upe && errors.upe} options={["Opción 1", "Opción 2", "Opción 3", "Opción 4", "Opción 5"]} onSelectChange={handleSelectChange} _id={"upe"} />
            {errors.upe && <p className="messageError">{errors.upe}</p>}
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
              id="dob"
            />
          </label>

          <label htmlFor="gender">
            Género
            <Select indexZ={"30"} error={errors.gender && errors.gender} options={["Femenino", "Masculino", "Otro"]} onSelectChange={handleSelectChange} _id={"gender"} />
            {errors.upe && <p className="messageError">{errors.upe}</p>}
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
              id="passwordConfirmation"
            />
          </label>
        </fieldset>

        <label htmlFor="tcp" className="labelCheckbox">
          <input tabIndex={0} type="checkbox" name="" id="tcp" />
          Acepto Términos y condiciones y Protección de datos
        </label>

        <button type="submit">Ingresar</button>

        <LinkRouter to={"../"}>¿Ya tienes una cuenta? <label className="bold">Inicia sesión</label></LinkRouter>
      </form>

      <div className="descriptionUniandes">
        <p>Universidad de los Andes | Vigilada Mineducación</p>
        <p>Reconocimiento como Universidad: Decreto 1297 del 30 de Mayo de 1964.</p>
        <p>Reconocimiento personería juridica: Resolución 28 del 23 de febrero de 1949 minjusticia.</p>
      </div>

    </article>

  );
}
