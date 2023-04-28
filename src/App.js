import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Perfil from "./pages/Perfil.jsx";
import HojaVida from "./pages/HojaVida.jsx";
import VerifyToken from "./components/VerifyToken";
import { privateRoutes, publicRoutes } from "./routes/routes.js";
import AuthRoutes from "./routes/AuthRoutes.jsx";
import CarouselForm from "./components/CarouselForm.jsx";
import { useSelector } from "react-redux";

export default function App() {
  VerifyToken();

  const user = useSelector((store) => store.user);
  // console.log(user);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={privateRoutes.PERFIL} />} />
        <Route path={`${publicRoutes.LOGIN}`} element={<Home />} />
        <Route path={publicRoutes.PRUEBAS} element={<CarouselForm />} />
        <Route path={`${publicRoutes.REGISTRO}`} element={<Register />} />
        <Route path="*" />
        <Route element={<AuthRoutes />}>
          <Route path={`${privateRoutes.PERFIL}`} element={<Perfil />} />
          <Route path={`${privateRoutes.SHEETS_LIFE}`} element={<HojaVida />} />
        </Route>
      </Routes>
    </>
  );
}
