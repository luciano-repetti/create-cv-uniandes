import { toast } from "react-toastify";
import { ERROR_CONFIG } from "../../config/notifications";

export function authErrorLogin(error) {
  const invalidCredentials = error.response.data.message.includes(
    "invalid Credentials"
  );
  invalidCredentials && toast("Email o contraseña incorrecta.", ERROR_CONFIG);
}
