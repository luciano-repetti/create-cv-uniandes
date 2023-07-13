import React, { useRef, useState } from "react";
// import "../styles/perfil.css"
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Select from "../components/Select";
import { useSelector } from "react-redux";
import { validatePerfil } from "../axios/validations/perfil";
import useAuth from "../customHooks/useAuth";
import Auth from "../axios/repositories/Auth";

export default function Perfil() {
  // ScrollToTop();
  const navigate = useNavigate();
  const { user } = useAuth();

  function convertData(value) {
    if (value === "S - SOLTERO") {
      return "Soltero";
    }
  }

  const formData = useRef({
    fullName: user?.uniandesProfile?.NombreCompleto || user?.fullName,
    dni: user?.uniandesProfile?.Cedula || user?.dni,
    codeUniandes: user?.uniandes_code,
    emailEducational:
      user?.uniandesProfile?.EmailUniandes || user?.profile?.secondary_email,
    emailPersonal: user?.email,
    phone: user?.profile?.phone,
  });
  const valueSelectRef = useRef({
    civilStatus:
      user?.uniandesProfile?.EstadoCivil || user?.profile?.civil_status,
    nationality:
      user?.uniandesProfile?.Nacionalidad || user?.profile?.nationality,
    country: user?.uniandesProfile?.Nacionalidad || user?.profile?.nationality,
    cityResidence:
      user?.uniandesProfile?.CiudadResidencia || user?.profile?.city,
    gender: user?.uniandesProfile?.Sexo || user?.gender,
  });

  const [birthdate, setBirthdate] = useState(user?.dob || "");
  const [errors, setErrors] = useState({});

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
    valueSelectRef.current[id] = value;
  }

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    formData.current[id] = value;
  };

  const verificationData = (data) => {
    const {
      cityResidence,
      civilStatus,
      codeUniandes,
      country,
      dni,
      emailEducational,
      emailPersonal,
      gender,
      fullName,
      nationality,
      phone,
      dob,
    } = data;

    let error = {
      fullName: validatePerfil("fullName", fullName),
      dni: validatePerfil("dni", dni),
      codeUniandes: validatePerfil("codeUniandes", codeUniandes),
      emailEducational: validatePerfil("email", emailEducational),
      emailPersonal: validatePerfil("email", emailPersonal),
      phone: validatePerfil("phone", phone),
      civilStatus: validatePerfil("select", civilStatus),
      nationality: validatePerfil("select", nationality),
      country: validatePerfil("select", country),
      cityResidence: validatePerfil("select", cityResidence),
      dob: validatePerfil("date", dob),
      gender: validatePerfil("select", gender),
    };

    const allEmpty = Object.values(error).every((error) => error === undefined);

    setErrors(error);
    console.log(allEmpty);

    return allEmpty;
  };

  function handleSubmit(event) {
    event.preventDefault();
    let dateFormatted = undefined;
    if (birthdate) {
      let formatDate = birthdate.trim().split("/");
      dateFormatted = formatDate[2] + "-" + formatDate[1] + "-" + formatDate[0];
    }

    console.log(formData.current);

    let formatData = {
      ...formData.current,
      ...valueSelectRef.current,
      dob: dateFormatted,
    };
    let verifData = verificationData(formatData);

    if (verifData) {
      const perfilInstance = Auth;
      perfilInstance
        .changeProfile(formatData)
        .then((response) => {
          console.log('response', response);
        })
        .catch((error) => {
          console.log('error', error);
        });
    }
  }

  return (
    <>
      <section className="containerPerfil">
        <h2>Perfil</h2>
        <div className="containerArticles">
          <article className="articlePefil">
            <h3>Datos básicos</h3>
            <form onSubmit={handleSubmit} className="formPerfil">
              <fieldset className="uploadPhoto">
                <img className="photoLoad" src="./usuario_vacio.png" alt="" />
                <div className="loadPhoto">
                  <p className="bold">Foto</p>
                  <p className="greyish">600 x 600 recomendado</p>
                  <button className="buttonLoad">Cargar ahora</button>
                </div>
              </fieldset>
              <fieldset>
                <label className="labelFullname">
                  Nombre y apellido completos
                  <input
                    tabIndex={0}
                    onChange={handleInputChange}
                    defaultValue={
                      user?.uniandesProfile?.NombreCompleto || user?.fullName
                    }
                    className={errors.fullName && "error"}
                    type="text"
                    placeholder="Tu nombre y apellido"
                    name=""
                    id="fullName"
                  />
                  {errors.fullName && (
                    <p className="messageError">{errors.fullName}</p>
                  )}
                </label>
              </fieldset>

              <fieldset>
                <label>
                  Número de identificación
                  <input
                    tabIndex={0}
                    onChange={handleInputChange}
                    defaultValue={user?.uniandesProfile?.Cedula || user?.dni}
                    className={errors.dni && "error"}
                    type="text"
                    placeholder="123456789"
                    name=""
                    id="dni"
                  />
                  {errors.dni && <p className="messageError">{errors.dni}</p>}
                </label>

                <label>
                  Código uniandes
                  <input
                    tabIndex={0}
                    onChange={handleInputChange}
                    defaultValue={user?.uniandes_code}
                    className={errors.codeUniandes && "error"}
                    type="text"
                    placeholder="c123456789"
                    name=""
                    id="codeUniandes"
                  />
                  {errors.codeUniandes && (
                    <p className="messageError">{errors.codeUniandes}</p>
                  )}
                </label>
              </fieldset>

              <fieldset>
                <label>
                  Correo institucional
                  <input
                    tabIndex={0}
                    onChange={handleInputChange}
                    defaultValue={
                      user?.uniandesProfile?.EmailUniandes ||
                      user?.profile?.secondary_email
                    }
                    className={errors.emailEducational && "error"}
                    type="email"
                    placeholder="example@uniandes.com"
                    name=""
                    id="emailEducational"
                  />
                  {errors.emailEducational && (
                    <p className="messageError">{errors.emailEducational}</p>
                  )}
                </label>

                <label>
                  Correo personal
                  <input
                    tabIndex={0}
                    onChange={handleInputChange}
                    defaultValue={user?.email}
                    className={errors.emailPersonal && "error"}
                    type="email"
                    placeholder="Tu correo personal"
                    name=""
                    id="emailPersonal"
                  />
                  {errors.emailPersonal && (
                    <p className="messageError">{errors.emailPersonal}</p>
                  )}
                </label>
              </fieldset>

              <fieldset>
                <label>
                  Celular
                  <input
                    tabIndex={0}
                    onChange={handleInputChange}
                    defaultValue={user?.profile?.phone}
                    className={errors.phone && "error"}
                    type="number"
                    placeholder="+57 310 458 6898"
                    name=""
                    id="phone"
                  />
                  {errors.phone && (
                    <p className="messageError">{errors.phone}</p>
                  )}
                </label>

                <label>
                  Estado civil
                  <Select
                    indexZ={"20"}
                    error={errors.civilStatus && errors.civilStatus}
                    options={[
                      { name: "Soltero", id: "soltero" },
                      { name: "Casado", id: "casado" },
                      { name: "Unión libre", id: "unionLibre" },
                    ]}
                    onSelectChange={handleSelectChange}
                    defaultValue={convertData(
                      user?.uniandesProfile?.EstadoCivil ||
                        user?.profile?.civil_status
                    )}
                    _id={"civilStatus"}
                  />
                  {errors.civilStatus && (
                    <p className="messageError">{errors.civilStatus}</p>
                  )}
                </label>
              </fieldset>

              <fieldset>
                <label>
                  Nacionalidad
                  <Select
                    indexZ={"20"}
                    error={errors.nationality && errors.nationality}
                    options={[
                      { name: "Colombiano", id: "colombiano" },
                      { name: "Argentino", id: "argentino" },
                      { name: "Chileno", id: "chileno" },
                    ]}
                    onSelectChange={handleSelectChange}
                    defaultValue={
                      user?.uniandesProfile?.Nacionalidad ||
                      user?.profile?.nationality
                    }
                    _id={"nationality"}
                  />
                  {errors.nationality && (
                    <p className="messageError">{errors.nationality}</p>
                  )}
                </label>

                <label>
                  País
                  <Select
                    indexZ={"20"}
                    error={errors.country && errors.country}
                    options={[
                      { name: "Colombia", id: "colombia" },
                      { name: "Argentina", id: "argentina" },
                      { name: "Chile", id: "chile" },
                    ]}
                    onSelectChange={handleSelectChange}
                    defaultValue={
                      user?.uniandesProfile?.Nacionalidad ||
                      user?.profile?.nationality
                    }
                    _id={"country"}
                  />
                  {errors.country && (
                    <p className="messageError">{errors.country}</p>
                  )}
                </label>
              </fieldset>

              <fieldset>
                <label>
                  Ciudad de residencia
                  <Select
                    indexZ={"20"}
                    error={errors.cityResidence && errors.cityResidence}
                    options={[
                      { name: "Bogotá D.C", id: "bogota d.c" },
                      { name: "Medillin", id: "medillin" },
                      { name: "Cartegena", id: "cartegena" },
                    ]}
                    onSelectChange={handleSelectChange}
                    defaultValue={
                      user?.uniandesProfile?.CiudadResidencia ||
                      user?.profile?.city
                    }
                    _id={"cityResidence"}
                  />
                  {errors.cityResidence && (
                    <p className="messageError">{errors.cityResidence}</p>
                  )}
                </label>

                <label>
                  Fecha de nacimiento
                  <input
                    tabIndex={0}
                    type="text"
                    onChange={handleChange}
                    className={errors.dob && "error"}
                    placeholder="DD/MM/AAAA"
                    name="fechaNacimiento"
                    value={birthdate}
                    id="dob"
                  />
                  {errors.dob && <p className="messageError">{errors.dob}</p>}
                </label>
              </fieldset>

              <fieldset>
                <label>
                  Género
                  <Select
                    indexZ={"30"}
                    error={errors.gender && errors.gender}
                    options={[
                      { name: "Femenino", id: "Femenino" },
                      { name: "Masculino", id: "Masculino" },
                      { name: "Otro", id: "Otro" },
                    ]}
                    onSelectChange={handleSelectChange}
                    defaultValue={user?.uniandesProfile?.Sexo || user?.gender}
                    _id={"gender"}
                  />
                  {errors.gender && (
                    <p className="messageError">{errors.gender}</p>
                  )}
                </label>
              </fieldset>
              <button type="submit" className="savePefil">
                Guardar
              </button>
            </form>
          </article>

          <article className="articlePefil">
            <h3>Porcentaje de información completada</h3>
            <article className="porcentajeCv">
              <h4 className="greyish">{user?.percentage}% de perfil completado</h4>
              <button
                className="downloadCv"
                onClick={() => navigate("/hoja-de-vida")}
              >
                Descargar hoja de vida
              </button>
            </article>
          </article>
        </div>
      </section>
    </>
  );
}
