import { LOGOUT } from "./../constants/actionTypes"

export const logout = () => async dispath => {
    
    dispath({ type: LOGOUT });
};