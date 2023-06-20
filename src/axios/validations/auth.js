import { toast } from "react-toastify";
import { ERROR_CONFIG } from "../../config/notifications";
import validator from "validator";

function validateLogin(data) {
    if(!validator.isEmail(data.email)){
        toast("El email no es valido.", ERROR_CONFIG)
        return false
    }
    
    if(!validator.isStrongPassword(data.password, { minLength: 6, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 0, returnScore: false, pointsPerUnique: 0, pointsPerRepeat: 0, pointsForContainingLower: 0, pointsForContainingUpper: 0, pointsForContainingNumber: 0, pointsForContainingSymbol: 0 })){
        toast("Debes introducir una contraseña con al menos una mayúscula, una minúscula, un número y seis dígitos.", ERROR_CONFIG)
        return false
    }
    return true
}

export { validateLogin }