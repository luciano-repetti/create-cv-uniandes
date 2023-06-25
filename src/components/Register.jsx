import React, { useState, useEffect } from "react";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import Select from "./Select";
import Config from "../axios/repositories/Config";
import Auth from "../axios/repositories/Auth";
import { validateRegister } from "../axios/validations/auth";
import useAuth from "../customHooks/useAuth";
import { authErrorLogin } from "../axios/validations/responseApi";
import { toast } from "react-toastify";
import { SUCCESS_CONFIG } from "../config/notifications";

export default function Register() {
  const [programs, setPrograms] = useState([]);
  const [birthdate, setBirthdate] = useState("");
  const [selects, setSelects] = useState({
    gender: "",
    identifier: "",
    upe: "",
  });
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState({ pass: false, passConfirm: false });

  const navigate = useNavigate();
  const {setUser} = useAuth();

  useEffect(() => {
    const getPrograms = async () => {
      const response = await Config.getProgram();
      setPrograms(response.data);
    };

    getPrograms();
  }, []);

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
    setSelects((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    let divDate = event.target[8].value.toLowerCase().trim().split("/");
    let day = divDate[0];
    let month = divDate[1];
    let year = divDate[2];

    const dateFormatted = year + "-" + month + "-" + day;

    const erroresForm = {
      name: validateRegister("name", event.target.querySelector("#name").value.toLowerCase().trim()),
      lastName: validateRegister("lastName", event.target.querySelector("#lastName").value.toLowerCase().trim()),
      email: validateRegister("email", event.target.querySelector("#email").value.toLowerCase().trim()),
      type: validateRegister("select", selects.identifier.toLowerCase()),
      upe: validateRegister("select", selects.upe.trim()),
      gender: validateRegister("select", selects.gender.toLowerCase()),
      password: validateRegister("password", event.target.querySelector("#password").value.trim()),
      passwordConfirmation: validateRegister("passwordConfirm", {password: event.target.querySelector("#password").value.trim(), passwordConfirm: event.target.querySelector("#passwordConfirmation").value.trim()}),
      code: validateRegister("code", event.target.querySelector("#numberIdentification").value.toLowerCase().trim()),
      date: validateRegister("date", dateFormatted),
      typ: event.target.querySelector("#tcp").checked ? undefined : "Debes aceptar los términos y condiciones",
    };

    const allEmpty = Object.values(erroresForm).every((error) => error === undefined);

    console.log(erroresForm);
    setErrors(erroresForm)

    async function sendData(userData){
      try {
        const response = await Auth.signUp(userData);
        console.log(response);
        toast("Se creo la cuenta con éxito.", SUCCESS_CONFIG)
        setTimeout(() =>{
          localStorage.setItem("70k3n", response.token)
          setUser(response)
          navigate("/perfil")
        }, 3000)
      } catch (error) {
        authErrorLogin(error)
        console.log(error);
      }
    }

    if (allEmpty) {
      const userData = {
        email: event.target.querySelector("#email").value.toLowerCase().trim(),
        password: event.target.querySelector("#password").value.trim(),
        passwordConfirmation: event.target.querySelector("#passwordConfirmation").value.trim(),
        fullName:
          event.target.querySelector("#name").value.toLowerCase().trim() +
          " " +
          event.target.querySelector("#lastName").value.toLowerCase().trim(),
        type: selects.identifier.toLowerCase(),
        code: event.target.querySelector("#numberIdentification").value.toLowerCase().trim(),
        last_program: selects.upe.trim(),
        dob: dateFormatted,
        gender: selects.gender.toLowerCase(),
      };
      console.log(userData);
      // setFormData(userData);
      sendData(userData)
    }

  }

  function handleShowPass(pass) {
    setShowPass((prevState) => ({
      ...prevState,
      [pass]: !showPass[pass],
    }));
  }

  return (
    <article className="formCredentials">
      <h2>¡Bienvenido!</h2>
      <h3>
        ¡Encuentra tu futuro ahora, pasa al siguiente nivel con nuestra
        herramienta!
      </h3>
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
            {errors.lastName && (
              <p className="messageError">{errors.lastName}</p>
            )}
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="identifier">
            Identificación
            <Select
              indexZ={"25"}
              error={errors.type && errors.type}
              options={[
                {name: "Cédula de identificación", id: "dni"},
                {name: "Pasaporte", id: "Pasaporte"},
                {name: "Código uniandes", id: "Código uniandes"},
              ]}
              onSelectChange={handleSelectChange}
              _id={"identifier"}
            />
            {errors.type && <p className="messageError">{errors.type}</p>}
          </label>

          <label htmlFor="numberIdentifier">
            Número de identificación
            <input
              tabIndex={0}
              className={errors.code && "error"}
              type="text"
              placeholder="Escribir número"
              name=""
              id="numberIdentification"
            />
            {errors.code && <p className="messageError">{errors.code}</p>}
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="upe">
            Último programa de egreso
            <Select
              indexZ={"20"}
              error={errors.upe && errors.upe}
              options={programs}
              onSelectChange={handleSelectChange}
              _id={"upe"}
            />
            {errors.upe && <p className="messageError">{errors.upe}</p>}
          </label>

          <label htmlFor="email">
            Correo
            <input
              tabIndex={0}
              className={errors.email && "error"}
              type="email"
              placeholder="example@uniandes.com"
              name=""
              id="email"
            />
            {errors.email && <p className="messageError">{errors.email}</p>}
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="birthdate">
            Fecha de nacimiento
            <input
              tabIndex={0}
              type="text"
              className={errors.date && "error"}
              placeholder="DD/MM/AAAA"
              name="fechaNacimiento"
              value={birthdate}
              onChange={handleChange}
              id="dob"
            />
            {errors.date && <p className="messageError">{errors.date}</p>}	
          </label>

          <label htmlFor="gender">
            Género
            <Select
              indexZ={"30"}
              error={errors.gender && errors.gender}
              options={[
                { name: "Femenino", id: "Femenino"},
                { name: "Masculino", id: "Masculino" },
                { name: "Otro", id: "Otro" },
              ]}
              onSelectChange={handleSelectChange}
              _id={"gender"}
            />
            {errors.gender && <p className="messageError">{errors.gender}</p>}
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="password">
            Contraseña
            <div className="containerInput">
              <input
                className={errors.password && "error"}
                tabIndex={0}
                type={showPass["pass"] ? "text" : "password"}
                placeholder="Ingrese su contraseña"
                name=""
                id="password"
              />
                <img
                  onClick={() => handleShowPass("pass")}
                  className="showpass"
                  src={
                    showPass["pass"]
                      ? "./icono-ver-contraseña.png"
                      : "./icono-no-ver-contraseña.png"
                  }
                />
            </div>
            {errors.password && <p className="messageError">{errors.password}</p>}
          </label>

          <label htmlFor="confirmPassword">
            Confirmar contraseña
            <div className="containerInput">
              <input
                className={errors.passwordConfirmation && "error"}
                tabIndex={0}
                type={showPass["passConfirm"] ? "text" : "password"}
                placeholder="Repetir su contraseña"
                name=""
                id="passwordConfirmation"
              />
              <img
                onClick={() => handleShowPass("passConfirm")}
                className="showpass"
                src={
                  showPass["passConfirm"]
                    ? "./icono-ver-contraseña.png"
                    : "./icono-no-ver-contraseña.png"
                }
              />
            </div>
            {errors.passwordConfirmation && <p className="messageError">{errors.passwordConfirmation}</p>}
          </label>
        </fieldset>

        <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
          <label htmlFor="tcp" className="labelCheckbox">
            <input tabIndex={0} type="checkbox" name="" id="tcp" />
            <label htmlFor="tcp">
              Acepto{" "}
              <label className="bold">
                Términos y condiciones y Protección de datos
              </label>
            </label>
          </label>
          {errors.typ && <p className="messageError">{errors.typ}</p>}
        </div>

        <button type="submit">Ingresar</button>

        <LinkRouter to={"../"}>
          ¿Ya tienes una cuenta? <label className="bold">Inicia sesión</label>
        </LinkRouter>
      </form>

      <div className="descriptionUniandes">
        <p>Universidad de los Andes | Vigilada Mineducación</p>
        <p>
          Reconocimiento como Universidad: Decreto 1297 del 30 de Mayo de 1964.
        </p>
        <p>
          Reconocimiento personería juridica: Resolución 28 del 23 de febrero de
          1949 minjusticia.
        </p>
      </div>
    </article>
  );
}
