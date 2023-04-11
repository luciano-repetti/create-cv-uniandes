import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Perfil from "./pages/Perfil.jsx";
import HojaVida from "./pages/HojaVida.jsx"
import VerifyToken from "./components/VerifyToken.js";
import CreateResume from "./components/CreateResume.jsx";

export default function App() {
  VerifyToken()

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/hoja-de-vida" element={<HojaVida   />} />
        <Route path="/pruebas" element={<CreateResume   />} />
        <Route path="*" />
      </Routes>
    </>
  );
}
