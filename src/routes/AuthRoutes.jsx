import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { publicRoutes } from "./routes"
import { useEffect, useState } from "react"

export default function AuthRoutes({user}){
    console.log(user);
    return(
        user && user.id ?
            <Outlet />
        :   <Navigate replace to={`${publicRoutes.LOGIN}`} />
    )

}