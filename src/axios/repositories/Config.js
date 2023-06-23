import axios from "axios";
import { validateLogin } from "../validations/auth";
import { config } from "../endpoints/config";

class Config {

    async getProgram() {
        const res = await axios.get(config.GET_PROGRAM);
        return res;
    }
}

export default new Config()