import { createReducer } from "@reduxjs/toolkit"; //metodo para realizar acciones asincronas
import userActions from "./actions";

const { userSignUp, userSignIn, verifyToken, userSignOut } = userActions //desestructuro las acciones

const initialState = {
    user: {},
    message: ""
}

const userReducers = createReducer( //necesita dos parametros(estados inicial, funcion que maneja los casos)
    initialState,
    (builder) => {
        builder //Proporciona un conjunto de metodos para agregar casos de accion al reducer
        .addCase( //requiere dos parametros (nombre de la accion, funcion para llenar el estado inicial)
        // Hay 3 propiedades que definen a la accion: fulfilled(cuando se cumple la promesa),
        //rejected(cuando se rechaza), pending(cuando todavia esta esperado)
        userSignUp.fulfilled,
        (state, action) => {
            const newState = {
                user: action.payload.response.signUp,
                message: "cuenta registrada con exito."
            }
            return newState
        })
        .addCase(userSignUp.rejected, (state, action) => {
            const newState = {
                user: {},
                message: action.payload
            }
    
            if (action.payload.message) {
              newState.message = `Error: ${action.payload.message}`
            }
    
            return newState
          })
        .addCase(userSignIn.fulfilled, (state, action) => {
            const newState = {
                user: action.payload.response.signIn,
                message: "Usuario logueado correactamente"
            }
            return newState
        })
        .addCase(userSignIn.rejected, (state, action) => {
            const newState = {
                user: {},
                message: action.payload
            }
    
            if (action.payload.message) {
              newState.message = `Error: ${action.payload.message}`
            }
    
            return newState
        })
        .addCase(verifyToken.fulfilled, (state, action) =>{
            const newState = {
                user: action.payload.response.token,
                message: "Usuario logueado correactamente"
            }
            return newState
        })
        .addCase(verifyToken.rejected, (state, action) =>{
            const newState = {
                user: {},
                message: action.payload
            }
    
            if (action.payload.message) {
              newState.message = `Error: ${action.payload.message}`
              localStorage.removeItem('70k3n')
            }
    
            return newState
        })
        .addCase(userSignOut.fulfilled, (state, action) =>{
            const newState = {
                user: action.payload.response.signOut,
                message: "Usuario deslogueado correctamente"
            }
            return newState
        })
    }
)

export default userReducers