export default function validator(id, value){
    switch (id) {
        case "name":
            if(value == ""){
                return "Este campo esta vacio"
            }else{
                let regexName = /^[a-zA-Z\s]+$/
                if(!regexName.test(value)){
                    return "El nombre ingresado no es valido."
                }
            }
            return ""
        case "lastName":
            if(value == ""){
                return "Este campo esta vacio"
            }else{
                let regexlastName = /^[a-zA-Z\s]+$/
                if(!regexlastName.test(value)){
                    return "El apellido ingresado no es valido."
                }
            }
            return ""
        case "select":
            if(value == ""){
                return "Debes ingresar una opción."
            }
            return ""
        default:
            break;
    }
}