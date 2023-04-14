import { LOGIN, LOGIN_FAILED } from "./../constants/actionTypes"



export const login = (username, password) => async dispath => {
    
    try {
        
        const response = await fetch('https://logintesting.p.rapidapi.com/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Authentication: 'Bearer',
                'X-RapidAPI-Key': 'b062419dc0msh0a669f78c6518f9p12ca79jsn0d83554c4b77',
                'X-RapidAPI-Host': 'logintesting.p.rapidapi.com'
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (response.ok) {
            
            dispath({ type: LOGIN, payload: data });
            localStorage.setItem('token', JSON.stringify(data.data.accessToken));
            
            //console.log(data.data.accessToken);
        } else {
            dispath({ type: LOGIN_FAILED, payload: data.error });
        }
    }
    catch (error) {
        dispath({ type: LOGIN_FAILED, payload: error.message });
    }
};