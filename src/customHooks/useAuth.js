import { useDispatch, useSelector } from "react-redux";
import { setUser as uploadUser } from "../store/userReducer";


export default function useAuth() {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    const setUserInStore = (user) => dispatch(uploadUser(user));

    return { user, setUser: setUserInStore };

}