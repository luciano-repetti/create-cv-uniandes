import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { publicRoutes } from "./routes"

export default function AuthRoutes(){

    const userState = useSelector(store => store.user) 
    return userState.user.id ? <Outlet/> : <Navigate replace to={`${publicRoutes.LOGIN}`} />

}