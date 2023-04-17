import { LOGIN, LOGIN_FAILED } from "./../constants/actionTypes"
import axios from 'axios';

export const login = (username, password) => async dispatch => {
    try {
        const response = await axios.post('https://logintesting.p.rapidapi.com/login', {
            username,
            password
        }, {
            headers: {
                'content-type': 'application/json',
                Authorization: 'Bearer',
                'X-RapidAPI-Key': 'b062419dc0msh0a669f78c6518f9p12ca79jsn0d83554c4b77',
                'X-RapidAPI-Host': 'logintesting.p.rapidapi.com'
            }
        });
        const data = response.data;
        if (response.status === 202) {
            
            dispatch({ type: LOGIN, payload: data });
            console.log(data);
            localStorage.setItem('token', JSON.stringify(data.data.accessToken));
        } else {
            dispatch({ type: LOGIN_FAILED, payload: data.error });
        }
    } catch (error) {
        dispatch({ type: LOGIN_FAILED, payload: error.message });
    }
};
