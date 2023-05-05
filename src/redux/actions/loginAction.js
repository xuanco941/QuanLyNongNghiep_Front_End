import { LOGIN, LOGIN_FAILED } from "./../constants/actionTypes"
import axios from 'axios';
import toastr from 'toastr';
import 'toastr/build/toastr.css';

export const login = (username, password) => async dispatch => {
    try {
        const response = await axios.post('https://localhost:7055/API/Auth/Login', {
            username,
            password
        }, {
            headers: {
                'content-type': 'application/json'             
            }
        });
        const data = response.data;
        if (data.status === 'success') {
            
            dispatch({ type: LOGIN, payload: data });           
            localStorage.setItem('token', data.data);
            toastr.success(data.message);
            
        } else {
            dispatch({ type: LOGIN_FAILED, payload: data });
            
        }
    } catch (error) {
        dispatch({ type: LOGIN_FAILED, payload: error.message });
        toastr.error("Sai tài khoản hoặc mật khẩu");
    }
};
