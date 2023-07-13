import API_URL from "../../config/backend";

const endpoint = "/api/v1/auth";

// End point base
const BASE_URL = API_URL + endpoint;

export const config = {
    SIGN_UP: `${BASE_URL}/signup`,
    SIGN_IN: `${BASE_URL}/signin`,
    VALID_TOKEN: `${BASE_URL}/checkAuthStatus`,
    CHANGE_PROFILE: `${BASE_URL}`
};