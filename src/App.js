import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Perfil from "./pages/Perfil.jsx";
import HojaVida from "./pages/HojaVida.jsx"
import VerifyToken from "./components/VerifyToken";
import CreateResume from "./components/CreateResume.jsx";
import { privateRoutes, publicRoutes } from "./routes/routes.js";
import AuthRoutes from "./routes/AuthRoutes.jsx";
import CarouselForm from "./components/CarouselForm.jsx";

export default function App() {
  VerifyToken()

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={privateRoutes.PERFIL} />} />
        <Route path={`${publicRoutes.LOGIN}`} element={<Home />} />
        <Route path={publicRoutes.PRUEBAS} element={<CarouselForm   />} />
        <Route path={`${publicRoutes.REGISTRO}`} element={<Register />} />
        <Route path="*" />
        <Route element={<AuthRoutes />}>
          <Route path={`${privateRoutes.PERFIL}`} element={<Perfil />} />
          <Route path={`${privateRoutes.SHEETS_LIFE}`} element={<HojaVida   />} />
        </Route>

      </Routes>
    </>
  );
}
