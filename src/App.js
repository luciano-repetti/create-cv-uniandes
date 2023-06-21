import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Perfil from "./pages/Perfil.jsx";
import HojaVida from "./pages/HojaVida.jsx";
import { privateRoutes, publicRoutes } from "./routes/routes.js";
import AuthRoutes from "./routes/AuthRoutes.jsx";
import CarouselForm from "./components/CarouselForm.jsx";
import { useEffect, useState } from "react";
import userActions from "./store/users/actions.js";
import "./styles/styles.css"
import Survey from "./pages/Survey.jsx";
import useAuth from "./customHooks/useAuth.js";


export default function App() {

  const [loading, setLoading] = useState(true)
  const { user } = useAuth();

    const {verifyToken} = userActions

    useEffect(() => {
        // if(localStorage.getItem("70k3n")){
        //     const token = localStorage.getItem("70k3n")
        //     dispatch(verifyToken(token))
        // }
        setTimeout(() => {
          setLoading(false)
        }, 100)
    }, []);


  console.log(user);

  if(loading) return <p>cargando..</p>

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={privateRoutes.PERFIL} />} />
        <Route path={publicRoutes.LOGIN} element={<Home />} />
        <Route path={publicRoutes.PRUEBAS} element={<CarouselForm />} />
        <Route path={publicRoutes.REGISTRO} element={<Register />} />
        <Route path="*" element={<AuthRoutes user={user} />}>
          <Route path={privateRoutes.PERFIL} element={<Perfil />} />
          <Route path={privateRoutes.SHEETS_LIFE} element={<HojaVida />} />
          <Route path={privateRoutes.SURVEY} element={<Survey />} />
        </Route>
      </Routes>
    </>
  );
}
