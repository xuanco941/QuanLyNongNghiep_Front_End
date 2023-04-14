import React from 'react'
import { useEffect } from 'react';
import Dashboard from '../../layout/Dashboard';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
const IssueDashboard = () => {
    const navigate = useNavigate();
    const selector = useSelector(state => state);
    console.log(selector);
    //const token = JSON.parse(localStorage.getItem('token'));
    
    
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(!token){
            navigate('/', { replace: true });
            
        }
    },[navigate]);
    const handleClick = () =>{
        localStorage.removeItem('token');
        navigate('/', { replace: true });
    }
    return (
        <div>
            <Dashboard />
            <button onClick={()=>handleClick()}>Đăng xuất</button>
        </div>

    )
}

export default IssueDashboard