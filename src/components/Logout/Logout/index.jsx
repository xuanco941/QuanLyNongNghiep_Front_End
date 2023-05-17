import React from 'react'
import { useNavigate } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLocation } from 'react-router-dom';

const LogoutButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        if(location.pathname.includes('admin')){
            localStorage.removeItem('token_admin');
            navigate('/admin')
        }else{
            localStorage.removeItem('token');
            navigate('/')
        }
        
    }
    return (
        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
                <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Đăng xuất" />
        </ListItemButton>
    )
}

export default LogoutButton