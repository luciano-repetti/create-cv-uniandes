import { toast } from "react-toastify";
import { ERROR_CONFIG } from "../../config/notifications";
import validator from "validator";


function validatePerfil(id, value){
    let regex = {fullName: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/}
    switch (id) {
        case "fullName":
            if(value == undefined){
                return "Debes ingresar un nombre."
            }else if (!validator.matches(value, regex.fullName)) {
                return "El nombre y apellido no es válido.";
            }
            break;
        case "dni":
            if(value == undefined){
                return "Debes ingresar DNI."
            }else if(!validator.isNumeric(value.toString())){
                return "El DNI ingresado no es valido.";
            }
            break;
        case "codeUniandes":
            if(value == undefined){
                return "Debes ingresar un codigo Uniades."
            }else if(!validator.isNumeric(value.toString())){
                return "El código Uniades no es valido.";
            }
            break;
        case "email":
            console.log(value);
            if(value == undefined){
                return "Debes ingresar un email."
            }else if(!validator.isEmail(value)){
                return "El email no es valido.";
            }
            break;
        case "phone":
            if(value == undefined){
                return "Debes ingresar un telefono."
            }else if(!validator.isNumeric(value.toString())){
                return "El teléfono no es valido.";
            }
            break;
        case "select":
            if (value == "") {
                return "Debes ingresar una opción.";
            }
            break;
        case "date":
            console.log(value);
            if (value == undefined) {
                return "Debes ingresar una fecha.";
            } else if (!validator.isDate(value)) {
                return "La fecha ingresada no es valida.";
            }
            break;
        default:
            break;
    }
}


export { validatePerfil };