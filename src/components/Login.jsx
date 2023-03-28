import React from "react";

export default function Login(){

    return(
    <article className="formCredentials login">
      <h2>Bienvenido</h2>
      <h3>¡Encuentra tu futuro ahora, pasa al siguiente nivel con nuestra herramienta!</h3>
      <form className="registerForm">
        
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
              type="password"
              placeholder="Contraseña"
              name=""
              id="password"
            />
          </label>
      </fieldset>
      <div className="forgetPassword">
        <a href="">¿Olvidaste tu contraseña?</a>
      </div>

        <button type="submit">Ingresar</button>

        <a href="">¿No tienes una cuenta? <label className="bold">Registrate</label></a>

        <button type="">Iniciar sesión con Office 365</button>

      </form>
    </article>
    )
}