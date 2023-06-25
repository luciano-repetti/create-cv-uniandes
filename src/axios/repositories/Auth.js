import axios from "axios";
import { validateLogin } from "../validations/auth";
import { config } from "../endpoints/auth";

class Auth {

    async signIn(userData) {
        const validate = validateLogin(userData);
        if (!validate) return false;

        const res = await axios.post(config.SIGN_IN, userData);
        return res.data;
    }

    async verifyToken(token) {
        const res = await axios.get(config.VALID_TOKEN, {headers: {Authorization: `bearer ${token}`}});
        return res;
    }

    async signUp(userData) {
        const res = await axios.post(config.SIGN_UP, userData);
        return res.data;
    }
}

export default new Auth()