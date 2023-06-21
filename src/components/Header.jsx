import React, {useEffect, useState} from "react";
import { useLocation, Link, useNavigate } from "react-router-dom"
// import "../styles/header.css"
import { useDispatch } from "react-redux";
import userActions from "../store/users/actions";
import { privateRoutes } from "../routes/routes";
import useAuth from "../customHooks/useAuth";

export default function Header(){

    const { user, setUser } = useAuth();
    const [signOut, setSignOut] = useState(false)
    const [menu, setMenu] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()

    function changeSignOut(){
        setSignOut(!signOut)
        setUser(null)
        localStorage.removeItem("70k3n")
    }      

    function isCurrentPage(path){
        return location.pathname === path ? 'active' : '';
    }

    function changeMenu(){
        setMenu(!menu)
    }

    return(
        <header className={user ? "header user" : "header"}>
            {
                user ?
                <>
                    <img className="logoSimple" src="/Logo-U-Andes-Header.png" alt="" />
                    <article className="containerNavigation">
                        <nav className="nav">
                            <Link to={privateRoutes.PERFIL} className={isCurrentPage("/perfil")}>Perfil</Link>
                            <Link to={privateRoutes.SHEETS_LIFE} className={isCurrentPage("/hoja-de-vida")}>Hoja de vida</Link>
                            <Link to={privateRoutes.SURVEY} className={isCurrentPage("/descubriendo-tu-opinion")}>Descubriendo tu opinión</Link>
                        </nav>
                        <div className="userSignOut" onClick={() => setSignOut(!signOut)}>
                            <img className="userImg" src="./usuario_vacio.png" alt="" />
                            <div style={{display : "flex", alignItems: "center"}}>
                                <p>{user.fullName}</p>
                                <img className="arrow" src="./arrow-down.png" alt="" />
                            </div>
                            <button onClick={changeSignOut} className={(signOut ? "profile show" : "profile")}><img src="./cerrar-sesion.png" />Cerrar sesión</button>
                        </div>
                        <div className="menuBurger">
                            {menu ? <img onClick={changeMenu} src="./cerrar2-icono.png" alt="" />
                            : <img onClick={changeMenu} src="./menu-icono.png" alt="" />
                            }
                        </div>
                        <div className={menu ? "menuNavegation show" : "menuNavegation"}>
                            <div className="user">
                                <img className="userImg" src="./usuario_vacio.png" alt="" />
                                <p>{user.fullName}</p>
                            </div>
                            <nav className="containerNavegation">
                                <Link to={privateRoutes.PERFIL} onClick={changeMenu} className={isCurrentPage("/perfil")}>Perfil</Link>
                                <Link to={privateRoutes.SHEETS_LIFE} onClick={changeMenu} className={isCurrentPage("/hoja-de-vida")}>Hoja de vida</Link>
                                <Link to={privateRoutes.SURVEY} onClick={changeMenu} className={isCurrentPage("/descubriendo-tu-opinion")}>Descubriendo tu opinión</Link>
                            </nav>
                            <div className="signOut">
                                <button onClick={changeSignOut} className="buttonSignOut"><img src="./cerrar-sesion.png" />Cerrar sesión</button>
                            </div>
                        </div>
                    </article>
                </>
                :  <img className="logo" src="./Logo-U-Andes.png" alt="" />
            }
        </header>
        
    )
}