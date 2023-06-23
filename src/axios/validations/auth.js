import { toast } from "react-toastify";
import { ERROR_CONFIG } from "../../config/notifications";
import validator from "validator";

function validateLogin(data) {
  if (!validator.isEmail(data.email)) {
    toast("El email no es valido.", ERROR_CONFIG);
    return false;
  }

  if (
    !validator.isStrongPassword(data.password, {
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 0,
      returnScore: false,
      pointsPerUnique: 0,
      pointsPerRepeat: 0,
      pointsForContainingLower: 0,
      pointsForContainingUpper: 0,
      pointsForContainingNumber: 0,
      pointsForContainingSymbol: 0,
    })
  ) {
    toast(
      "Debes introducir una contraseña con al menos una mayúscula, una minúscula, un número y seis dígitos.",
      ERROR_CONFIG
    );
    return false;
  }
  return true;
}

function validateRegister(id, value) {
  switch (id) {
    case "name":
      if (!validator.isAlpha(value, ["es-ES"])) {
        return "El nombre ingresado no es valido.";
      }
      break
    case "lastName":
      if (!validator.isAlpha(value, ["es-ES"])) {
        return "El nombre ingresado no es valido.";
      }
      break
    case "select":
      if (value == "") {
        return "Debes ingresar una opción.";
      }
      break
    case "email":
      if (!validator.isEmail(value)) {
        return "El email no es valido.";
      }
      break
    case "password":
      if (
        !validator.isStrongPassword(value, {
          minLength: 6,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 0,
          returnScore: false,
          pointsPerUnique: 0,
          pointsPerRepeat: 0,
          pointsForContainingLower: 0,
          pointsForContainingUpper: 0,
          pointsForContainingNumber: 0,
          pointsForContainingSymbol: 0,
        })
      ) {
        return "Debes introducir una contraseña con al menos una mayúscula, una minúscula, un número y seis dígitos alphanumericos.";
      }
      break
    case "passwordConfirm":
      if (value == "") {
        return "Debes ingresar la confirmación de la contraseña.";
      } else if (value.password !== value.passwordConfirm) {
        return "Las contraseñas no coinciden.";
      }
      break
    case "date":
      if (value == "") {
        return "Debes ingresar una fecha.";
      } else if (!validator.isDate(value)) {
        return "La fecha ingresada no es valida.";
      }
      break
    case "code":
      if (value == "") {
        return "Debes ingresar un código.";
      } else if (!validator.isNumeric(value)) {
        return "El código ingresado no es valido.";
      }
      break
    default:
      break;
  }
}

export { validateLogin, validateRegister };
