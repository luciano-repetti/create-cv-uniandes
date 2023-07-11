import { useEffect } from "react";
import { useLocation } from "react-router-dom"

export function AzureLogin(){
    const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.hash.slice(1)); // Eliminar el símbolo "#" de la ubicación
    const clientInfo = queryParams.get("client_info");
    const code = queryParams.get("code");
    const state = queryParams.get("state");
    const session_state = queryParams.get("session_state");

    console.log(clientInfo);
    console.log(code);
    console.log(state);
    console.log(session_state);
  }, [location]);

    return(
        <h1>Hola Azure!</h1>
    )
}