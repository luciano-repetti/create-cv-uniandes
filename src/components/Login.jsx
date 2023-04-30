import React, { useEffect, useState } from "react";
import { Link as LinkRouter, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../store/users/actions";

export default function Login(){

  const navigate = useNavigate()

  const [formData, setFormData] = useState({})
  const [showPass, setShowPass] = useState(false)

  const dispatch = useDispatch()
  const {userSignIn} = userActions
  const location = useLocation()
  const user = useSelector(store => store.user)

  function handleSubmit(event){
    event.preventDefault()

    setFormData({
      email: event.target[1].value.toLowerCase().trim(),
      password: event.target[3].value.trim()
    })
  }

  function handleShowPass(){
    setShowPass(!showPass)
  }

  useEffect(() => {
    if(Object.keys(formData).length !== 0){ 
      dispatch(userSignIn(formData))
    }
  }, [formData])

  useEffect(() =>{
    if(user && (Object.keys(user.user).length > 0)){
      navigate("/perfil");
    }
  }, [user])

    return(
    <article className="formCredentials login">
      <h2>¡Bienvenido!</h2>
      <h3>¡Encuentra tu futuro ahora, pasa al siguiente nivel con nuestra herramienta!</h3>
      <form className="registerForm" onSubmit={handleSubmit}>
        
      <fieldset>
          <label className="labelLogin" htmlFor="email">
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
          <label className="labelLogin" htmlFor="password">
            Contraseña
            <input
              type={showPass ? "text" : "password"}
              placeholder="Contraseña"
              name=""
              id="password"
            ></input>
            <img onClick={() => handleShowPass()} className="showpass" src={showPass ? "http://localhost:3000/icono-ver-contraseña.png" : "http://localhost:3000/icono-no-ver-contraseña.png"} />
          </label>
      </fieldset>
      <div className="forgetPassword">
        <a href="">¿Olvidaste tu contraseña?</a>
      </div>

        <button type="submit">Ingresar</button>

        <LinkRouter to={"/registro"}>¿No tienes una cuenta? <label className="bold">Registrate</label></LinkRouter>

        <button className="buttonMicrosoft" type="">Iniciar sesión con Microsoft Outlook</button>

      </form>

      <div className="descriptionUniandes">
        <p>Universidad de los Andes | Vigilada Mineducación</p>
        <p>Reconocimiento como Universidad: Decreto 1297 del 30 de Mayo de 1964.</p>
        <p>Reconocimiento personería juridica: Resolución 28 del 23 de febrero de 1949 minjusticia.</p>
      </div>

    </article>
    )
}