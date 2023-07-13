import axios from "axios";
import { config } from "../endpoints/perfil";

const token = localStorage.getItem("70k3n")

class Perfil {


    async changePerfil(userData) {
        const res = await axios.patch(config.CHANGE_PERFIL + `/`, userData, {headers: {Authorization: `bearer ${token}`}});
        return res.data;
    }
}

export default Perfil