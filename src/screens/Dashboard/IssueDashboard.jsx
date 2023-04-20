import React from 'react'
import { useEffect } from 'react';
import Dashboard from '../../layout/Dashboard';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/actions/logoutAction';
const IssueDashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selector = useSelector(state => state.login);
    console.log(selector.isAuthenticated);
    //const token = JSON.parse(localStorage.getItem('token'));
    
    

    const handleClick = () =>{
        dispatch(logout());
        localStorage.removeItem('token');

    }
    return (
        <div>
            <Dashboard />
            <button onClick={()=>handleClick()}>Đăng xuất</button>
        </div>

    )
}

export default IssueDashboard