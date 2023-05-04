import { REGISTER_SUCCESS, REGISTER_FAILED } from "../constants/actionTypes";
import toastr from 'toastr';
import 'toastr/build/toastr.css';
import axios from 'axios';

export const register = (fullName, userName, email, phoneNumber,address ) => async dispatch =>{
    try{
        const response = await axios.post('https://localhost:7055/API/Auth/Register',{
            fullName,
            userName,
            email,
            phoneNumber,
            address
        },{
            headers: {
                'content-type': 'application/json',

            }
        });
        
        const data = response.data;
        if (data.status == "success") {
            
            dispatch({ type: REGISTER_SUCCESS, payload: data});
            //console.log(data);
            toastr.success(data.message);
        } else {
            console.log(data);
            dispatch({ type: REGISTER_FAILED,payload: data});
        }
    }
    catch(error){
        dispatch({type: REGISTER_FAILED,payload:error.message});
        toastr.error("Tài khoản đã tồn tại");

    }
};