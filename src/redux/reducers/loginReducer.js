import { LOGIN, LOGIN_FAILED, LOGOUT } from "./../constants/actionTypes"

const initialState = {
    isAuthenticated: false,
    user: null,
    error: null
};

export default function loginReducer(state = initialState, action){
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                isAuthenticated: true,
                user: action.payload,
                error: null
            };
        case LOGIN_FAILED:
            return{
                ...state,
                isAuthenticated: false,
                error: action.payload,
                user: null
            };
        case LOGOUT:
            return{
                ...state,
                isAuthenticated: false,
                error: null,
                user: null
            }
        default:
            return state;
    }
}