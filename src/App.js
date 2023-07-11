import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
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
import "./styles/styles.css";
import Survey from "./pages/Survey.jsx";
import Auth from "./axios/repositories/Auth.js";
import useAuth from "./customHooks/useAuth.js";
import { AzureLogin } from "./pages/AzureADLogin.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      if (!user) {
        if (localStorage.getItem("70k3n")) {
          const token = localStorage.getItem("70k3n");
          try {
            const res = await Auth.verifyToken(token);
            setUser(res.data);
            navigate('/perfil')
          } catch (error) {
            console.log(error);
          }
        }
      }
      setTimeout(() => {
        setLoading(false);
      }, 100);
    }
    fetchData();
  }, []);

  if (loading) return <p>Loading..</p>;

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={privateRoutes.PERFIL} />} />
        <Route path={publicRoutes.LOGIN} element={<Home />} />
        <Route path={publicRoutes.PRUEBAS} element={<CarouselForm />} />
        <Route path={publicRoutes.REGISTRO} element={<Register />} />
        <Route path={publicRoutes.AZURELOGIN} element={<AzureLogin />} />
        <Route path="*" element={<AuthRoutes user={user} />}>
          <Route path={privateRoutes.PERFIL} element={<Perfil />} />
          <Route path={privateRoutes.SHEETS_LIFE} element={<HojaVida />} />
          <Route path={privateRoutes.SURVEY} element={<Survey />} />
        </Route>
      </Routes>
    </>
  );
}
