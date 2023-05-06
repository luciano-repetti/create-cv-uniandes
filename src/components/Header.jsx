import React, {useEffect, useState} from "react";
import { useLocation, Link, useNavigate } from "react-router-dom"
// import "../styles/header.css"
import { useSelector, useDispatch } from "react-redux";
import userActions from "../store/users/actions";
import { privateRoutes } from "../routes/routes";

export default function Header(){

    const [userData, setUserData] = useState({})
    const [signOut, setSignOut] = useState(false)
    const [menu, setMenu] = useState(false)

    const {userSignOut} = userActions
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const user = useSelector(store => store.user)

    function changeSignOut(){
        setSignOut(!signOut)
        dispatch(userSignOut())
        navigate("/login");
    }

    useEffect(() =>{
        if(user && (Object.keys(user.user).length >= 0)){
          setUserData(user.user)
        }
      }, [user])
      

    function isCurrentPage(path){
        return location.pathname === path ? 'active' : '';
    }

    function changeMenu(){
        setMenu(!menu)
    }

    return(
        <header className={Object.keys(userData).length > 0 ? "header user" : "header"}>
            {
                Object.keys(userData).length > 0 ?
                <>
                    <img className="logoSimple" src="/Logo-U-Andes-Header.png" alt="" />
                    <article className="containerNavigation">
                        <nav className="nav">
                            <Link to={privateRoutes.PERFIL} className={isCurrentPage("/perfil")}>Perfil</Link>
                            <Link to={privateRoutes.SHEETS_LIFE} className={isCurrentPage("/hoja-de-vida")}>Hoja de vida</Link>
                            <Link to={privateRoutes.SURVEY} className={isCurrentPage("/descubriendo-tu-opinion")}>Descubriendo tu opinión</Link>
                        </nav>
                        <div className="userSignOut" onClick={() => setMenu(!menu)}>
                            <img className="userImg" src="./usuario_vacio.png" alt="" />
                            <div style={{display : "flex", alignItems: "center"}}>
                                <p>{userData.fullName}</p>
                                <img className="arrow" src="./arrow-down.png" alt="" />
                            </div>
                            <button onClick={changeSignOut} className={(menu ? "profile show" : "profile")}><img src="./cerrar-sesion.png" />Cerrar sesión</button>
                        </div>
                        <div className="menuBurger">
                            {menu ? <img onClick={changeMenu} src="./cerrar2-icono.png" alt="" />
                            : <img onClick={changeMenu} src="./menu-icono.png" alt="" />
                            }
                        </div>
                        <div className={menu ? "menuNavegation show" : "menuNavegation"}>
                            <div className="user">
                                <img className="userImg" src="./usuario_vacio.png" alt="" />
                                <p>{userData.fullName}</p>
                            </div>
                            <nav className="containerNavegation">
                                <Link to={privateRoutes.PERFIL} className={isCurrentPage("/perfil")}>Perfil</Link>
                                <Link to={privateRoutes.SHEETS_LIFE} className={isCurrentPage("/hoja-de-vida")}>Hoja de vida</Link>
                                <Link to={privateRoutes.SURVEY} className={isCurrentPage("/descubriendo-tu-opinion")}>Descubriendo tu opinión</Link>
                            </nav>
                            <div className="signOut">
                                <button className="buttonSignOut"><img src="./cerrar-sesion.png" />Cerrar sesión</button>
                            </div>
                        </div>
                    </article>
                </>
                :  <img className="logo" src="./Logo-U-Andes.png" alt="" />
            }
        </header>
        
    )
}