import React, {useEffect, useState} from "react";
import { useLocation, Link, useNavigate } from "react-router-dom"
// import "../styles/header.css"
import { useSelector, useDispatch } from "react-redux";
import userActions from "../store/users/actions";
import { privateRoutes } from "../routes/routes";

export default function Header(){

    const [userData, setUserData] = useState({})
    const [menu, setMenu] = useState(false)

    const {userSignOut} = userActions
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const user = useSelector(store => store.user)

    function changeSignOut(){
        setMenu(!menu)
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
                            <Link>Descubriendo tu opinión</Link>
                        </nav>
                        <div className="userSignOut">
                            <img className="userImg" src="./usuario_vacio.png" alt="" />
                            <p onClick={() => setMenu(!menu)}>{userData.fullName} <img className="arrow" src="./arrow-down.png" alt="" /></p>
                            <button onClick={changeSignOut} className={(menu ? "profile show" : "profile")}><img src="./cerrar-sesion.png" />Cerrar sesión</button>
                        </div>
                    </article>
                </>
                :  <img className="logo" src="./Logo-U-Andes.png" alt="" />
            }
        </header>
        
    )
}