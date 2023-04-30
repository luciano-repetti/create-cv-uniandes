import React, { useEffect } from "react";
import { useDispatch } from "react-redux"
import userActions from "../store/users/actions";

export default function VerifyToken(){
    
    const dispatch = useDispatch()

    const {verifyToken} = userActions

    useEffect(() => {
        if(localStorage.getItem("70k3n")){
            const token = localStorage.getItem("70k3n")
            dispatch(verifyToken(token))
        }
    }, []);

    return <div>Verifying token...</div>
}