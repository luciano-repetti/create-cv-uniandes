import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { publicRoutes } from "./routes"
import { useEffect, useState } from "react"

export default function AuthRoutes(){

    const [userData, setUserData] = useState({})

    const user = useSelector(store => store.user)

    useEffect(() =>{
        if(user && (Object.keys(user.user).length > 0)){
            setUserData(user.user)
            console.log(user);
        }
      }, [user])

    //   console.log(user);

    return(
        user.user.id ?
            <Outlet />
        :   <Navigate replace to={`${publicRoutes.LOGIN}`} />
    )

}