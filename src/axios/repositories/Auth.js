import axios from "axios";
import { validateLogin } from "../validations/auth";
import { config } from "../endpoints/auth";

class Auth {

    async signUp(userData) {
        const validate = validateLogin(userData);
        if (!validate) return false;

        const res = axios.post(config.SIGN_IN, userData).then((res) => res.data);
        return res;
    }
}

export default new Auth()