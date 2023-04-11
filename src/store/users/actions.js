import { createAsyncThunk } from "@reduxjs/toolkit"; //metodo para realizar acciones asincronas
import axios from "axios"; //para la llamada a la api

const apiUrl = "http://localhost:3001/api/v1/"

const userSignUp = createAsyncThunk( //necesita dos parametros(nombre de la accion, funcion async cada vez que se haga un dispatch)
    "userSignUp",
    async(userData, { rejectWithValue }) => {
        try {
            const res = await axios.post(`${apiUrl}auth/signup`, userData)//llamada a la api
            return {
                success: true,
                response: {signUp: res.data}
            }
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data);
        }
    }
)

const userSignIn = createAsyncThunk(
    "userSignIn",
    async(userData, { rejectWithValue }) => {
        try {
            const res = await axios.post(`${apiUrl}auth/signin`, userData)
            localStorage.setItem("70k3n", res.data.token)
            console.log(res);
            return{
                success: true,
                response: {signIn: res.data}
            }
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const verifyToken = createAsyncThunk(
    "verifyToken",
    async(token, { rejectWithValue }) =>{
        try {
            const res = await axios.get(`${apiUrl}auth/checkAuthStatus`,{
                headers: {Authorization: `bearer ${token}`}
            })
            return{
                success: true,
                response: {token: res.data}
            }
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const userSignOut = createAsyncThunk(
    "userSignOut",
    async() =>{
        localStorage.removeItem('70k3n')
        return{
            success: true,
            response: {signOut: {}}
        }
    }
)


//return de la accion(action) hacia el reductor(reducer) y el reductor lo toma como PAYLAOD

//aca guardo en un objeto todas las acciones relacionadas a los usuarios
const userActions = {userSignUp, userSignIn, verifyToken, userSignOut}

export default userActions