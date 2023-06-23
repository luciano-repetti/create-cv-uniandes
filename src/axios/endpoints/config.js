import API_URL from "../../config/backend";

const endpoint = "/api/v1/configuration";

// End point base
const BASE_URL = API_URL + endpoint;

export const config = {
    GET_PROGRAM: `${BASE_URL}/program`,
};