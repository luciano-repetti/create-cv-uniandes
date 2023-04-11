import React, { useEffect, useState } from "react";
import "../styles/perfil.css"
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Select from "../components/Select";
import { useSelector } from "react-redux";

export default function Perfil() {
  // ScrollToTop();
  const navigate = useNavigate()

  const user = useSelector(store => store.user)
  const [birthdate, setBirthdate] = useState("")
  const [selects, setSelects] = useState({gender: "", identifier: "", upe: ""})

  useEffect(() =>{
    if(Object.keys(user.user).length == 0){
      navigate("/")
    }
  }, [user])

  function handleChange(event) {
    let value = event.target.value;

    // Remove any non-numeric character from the input value
    value = value.replace(/[^\d]/g, "")

    // Add a slash after the day
    if (value.length >= 2 && value.charAt(2) !== "/") {
      value = `${value.slice(0, 2)}/${value.slice(2)}`
    }

    // Add a slash after the month
    if (value.length >= 5 && value.charAt(5) !== "/") {
      value = `${value.slice(0, 5)}/${value.slice(5)}`
    }

    if(value.length >= 10){
      value = `${value.slice(0, 10)}`
    }
    console.log(event);

    setBirthdate(value);
  }

  function handleSelectChange(value, id) {
    setSelects(prevState => ({
      ...prevState,
      [id]: value
    }
    ))
  }


  return (
    <>
      <section className="containerPerfil">
        <h2>Perfil</h2>
        <div className="containerArticles">
          <article className="articlePefil">
            <h3>Datos básicos</h3>
            <form action="" className="formPerfil">
              <fieldset>
                <img className="photoLoad" src="http://localhost:3000/usuario_vacio.png" alt="" />
                <div className="loadPhoto">
                  <p className="bold">Foto</p>
                  <p className="greyish">600 x 600 recomendado</p>
                  <button className="buttonLoad">Cargar ahora</button>
                </div>
              </fieldset>
              <fieldset>
                <label>
                  Nombres
                  <input
                    tabIndex={0}
                    type="text"
                    placeholder="Tus nombres"
                    name=""
                    id="name"
                  />
                </label>

                <label>
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
                <label>
                  Número de identificación
                  <input
                    tabIndex={0}
                    type="text"
                    placeholder="123456789"
                    name=""
                    id="name"
                  />
                </label>

                <label>
                  Código uniandes
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
                <label>
                  Correo institucional
                  <input
                    tabIndex={0}
                    type="email"
                    placeholder="example@uniandes.com"
                    name=""
                    id="email"
                  />
                </label>

                <label>
                  Correo personal
                  <input
                    tabIndex={0}
                    type="email"
                    placeholder="Tu correo personal"
                    name=""
                    id="email"
                  />
                </label>
              </fieldset>

              <fieldset>
                <label>
                  Celular
                  <input
                    tabIndex={0}
                    type="email"
                    placeholder="+57 310 458 6898"
                    name=""
                    id="email"
                  />
                </label>

                <label>
                  Estado civil
                  <Select
                    indexZ={"20"}
                    options={["Soltero", "Casado", "Unión libre"]}
                    onSelectChange={handleSelectChange}
                    _id={"estadoCivil"}
                  />
                </label>
              </fieldset>

              <fieldset>
                <label>
                  Nacionalidad
                  <Select
                    indexZ={"20"}
                    options={["Colombiano", "Argentino", "Chileno"]}
                    onSelectChange={handleSelectChange}
                    _id={"nacionalidad"}
                  />
                </label>

                <label>
                  País
                  <Select
                    indexZ={"20"}
                    options={["Colombia", "Argentina", "Chile"]}
                    onSelectChange={handleSelectChange}
                    _id={"pais"}
                  />
                </label>
              </fieldset>

              <fieldset>
                <label>
                  Ciudad de residencia
                  <Select
                    indexZ={"20"}
                    options={["Bogotá D.C", "Medillin", "Cartegena"]}
                    onSelectChange={handleSelectChange}
                    _id={"ciudadResid"}
                  />
                </label>

                <label >
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
              </fieldset>

              <fieldset>
                <label >
                  Género
                  <Select
                    indexZ={"30"}
                    options={["Femenino", "Masculino", "Otro"]}
                    onSelectChange={handleSelectChange}
                    _id={"gender"}
                  />
                </label>
              </fieldset>

              <button type="submit">Guardar</button>

            </form>
          </article>

          <article className="articlePefil">
            <h3>Porcentaje de información completada</h3>
            <h4 className="greyish">14% de perfil completado</h4>
            <button className="downloadCv" onClick={() => navigate("/hoja-de-vida")}>Descargar hoja de vida</button>
          </article>
        </div>
      </section>
    </>
  );
}
