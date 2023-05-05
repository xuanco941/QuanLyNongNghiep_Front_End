import React from 'react'
import { useNavigate } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LogoutIcon from '@mui/icons-material/Logout';

const LogoutButton = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        localStorage.removeItem('token');
        navigate('/')
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