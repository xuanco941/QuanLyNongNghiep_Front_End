import { FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILED } from '../constants/actionTypes';
import axios from 'axios'

import toastr from 'toastr';
import 'toastr/build/toastr.css';

const forgot = (username) => async dispatch => {
    try {
        const response = await axios.post('https://localhost:7055/API/User/ForgotPassword', {
            username
        }, {
            headers: {
                'content-type': 'application/json',
            }
        });

        const data = response.data;
        if (data.status === "success") {
            dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data });
            toastr.success(data.message);
        } else {
            dispatch({ type: FORGOT_PASSWORD_FAILED, payload: data });
            
        }
    }
    catch (error) {
        dispatch({ type: FORGOT_PASSWORD_FAILED, payload: error.message })
        toastr.error("Tài khoản không tồn tại");
    }
}

export default forgot