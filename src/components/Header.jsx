import React, {useEffect, useState} from "react";
import { useLocation, Link } from "react-router-dom"
import "../styles/header.css"
import { useSelector, useDispatch } from "react-redux";
import userActions from "../store/users/actions";

export default function Header(){

    const [userData, setUserData] = useState({})
    const [menu, setMenu] = useState(false)

    const {userSignOut} = userActions
    const dispatch = useDispatch()
    const location = useLocation()

    const user = useSelector(store => store.user)

    function changeSignOut(){
        setMenu(!menu)
        dispatch(userSignOut())
    }

    useEffect(() =>{
        if(user && (Object.keys(user.user).length >= 0)){
          setUserData(user.user)
          console.log(user);
        }
      }, [user])

    useEffect(() => {
        console.log(location.pathname);
    }, [])

    function isCurrentPage(path){
        return location.pathname === path ? 'active' : '';
    }

    return(
        Object.keys(userData).length > 0 
        ?
        <header className="header user">
            <img className="logoSimple" src="http://localhost:3000/logo_simple_uniandes.png" alt="" />
            <article className="containerNavigation">
                <nav className="nav">
                    <Link to="/perfil" className={isCurrentPage("/perfil")}>Perfil</Link>
                    <Link to="/hoja-de-vida" className={isCurrentPage("/hoja-de-vida")}>Hoja de vida</Link>
                    <Link>Descubriendo tu opinión</Link>
                </nav>
                <div className="userSignOut">
                    <img className="userImg" src="http://localhost:3000/usuario_vacio.png" alt="" />
                    <p onClick={() => setMenu(!menu)}>{userData.fullName} <img className="arrow" src="http://localhost:3000/arrow-down.png" alt="" /></p>
                    <button onClick={changeSignOut} className={(menu ? "profile show" : "profile")}>Cerrar sesión</button>
                </div>
            </article>
        </header>
        :
        <header className="header">
            <img className="logo" src="http://localhost:3000/logo-uniandes.png" alt="" />
        </header>
        
    )
}