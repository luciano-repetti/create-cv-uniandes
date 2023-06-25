import { toast } from "react-toastify";
import { ERROR_CONFIG } from "../../config/notifications";

export function authErrorLogin(error) {
  const invalidCredentials = error.response.data.message.includes(
    "invalid Credentials"
  );
  invalidCredentials && toast("Email o contraseña incorrecta.", ERROR_CONFIG);

  const userAlredayExists = error.response.data.message.includes("already exist registered")
  console.log(userAlredayExists);
  userAlredayExists && toast("El usuario ya existe.", ERROR_CONFIG);
}
