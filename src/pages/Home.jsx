import React, {useState} from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import Header from "../components/Header";
import Background from "../components/Background";

export default function Home(){

    return(
        <>
            <Background></Background>
            {/* <Login/> */}
            <Register/>
        </>
    )
}