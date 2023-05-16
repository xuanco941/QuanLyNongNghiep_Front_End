import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.css'

const DetaiUser = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    

    const listUsers = [
        { id: '1', fullName: 'Le Van Tuong', username: 'tuong', email: 'tuong@gmail.com', phoneNumber: '012321432', address: 'Hanoi', area: ['Khu vực 1', 'Khu vực 2'] },
        { id: '2', fullName: 'Le Van Tuan', username: 'tuan1', email: 'tuong@gmail.com', phoneNumber: '012321432', address: 'Hanoi', area: ['Khu vực 3', 'Khu vực 4'] }
    ]
    return (
        <>
            <Box sx={{ width: '100%', padding: '10px' }} >
                <Typography sx={{ textAlign: 'center' }} variant="h5" gutterBottom>
                    Chi tiết tài khoản
                </Typography>
                {listUsers.map((data, index) => {
                    if (data.id == id) {
                        return (
                            <>
                                <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                                    <TextField onChange={console.log(1)} sx={{ width: '100%' }} id="outlined-basic" defaultValue={data.username} label='Tên tài khoản' variant="outlined" />
                                </Box>
                                <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                                    <TextField onChange={console.log(1)} sx={{ width: '100%' }} id="outlined-basic" defaultValue={data.fullName} label='Họ và tên' variant="outlined" />
                                </Box>
                                <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                                    <TextField onChange={console.log(1)} sx={{ width: '100%' }} id="outlined-basic" defaultValue={data.email} label='Email' variant="outlined" />
                                </Box>
                                <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                                    <TextField onChange={console.log(1)} sx={{ width: '100%' }} id="outlined-basic" defaultValue={data.phoneNumber} label='Số điện thoại' variant="outlined" />
                                </Box>
                                <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                                    <TextField sx={{ width: '100%' }} id="outlined-basic" defaultValue={data.address} label='Địa chỉ' variant="outlined" />
                                </Box>
                                <Box sx={{mt: 2, mb: 1, display: 'flex', justifyContent: 'space-between' }}>

                                    <Button className={styles.btnAccept}>Đồng ý</Button>

                                </Box>
                            </>
                        )
                    }

                })}
            </Box>
        </>
    )
}

export default DetaiUser