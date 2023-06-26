import axios from "axios";
import { validateLogin } from "../validations/auth";
import { config } from "../endpoints/perfil";

class Perfil {

    async changePerfil(userData) {
        const res = await axios.post(config.CHANGE_PERFIL + `/`, userData, {headers: {Authorization: `bearer ${token}`}});
        return res.data;
    }
}