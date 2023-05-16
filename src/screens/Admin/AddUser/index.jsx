import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import styles from './index.module.css'
const AddUser = () => {
    return (
        <>
            <Box sx={{ width: '100%', padding: '10px' }}>
                <Typography sx={{ textAlign: 'center' }} variant="h5" gutterBottom>
                    Tạo tài khoản
                </Typography>

                <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                    <TextField sx={{ width: '100%' }} id="outlined-basic" label="Họ và tên" variant="outlined" />
                </Box>

                <Box sx={{ display:'flex',justifyContent:'space-between',gap:'20px', mt: 2, mb: 1, textAlign: 'center' }}>
                    <TextField sx={{ width: '100%' }} id="outlined-basic" label="Tên tài khoản*" variant="outlined" />
                    <TextField sx={{ width: '100%' }} id="outlined-basic" label="Mật khẩu*" variant="outlined" />
                </Box>
                <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                    
                </Box>
                <Box sx={{display:'flex',justifyContent:'space-between',gap:'20px', mt: 2, mb: 1, textAlign: 'center' }}>
                    <TextField sx={{ width: '100%' }} id="outlined-basic" label="Email" variant="outlined" />
                    <TextField sx={{ width: '100%' }} id="outlined-basic" label="Số điện thoại" variant="outlined" />
                </Box>
                <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                    
                </Box>
                <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                    <TextField sx={{ width: '100%' }} id="outlined-basic" label="Địa chỉ" variant="outlined" />
                </Box>
                <Box sx={{ mt: 2, mb: 1, textAlign: 'center', display:'flex', gap:'20px'}}>
                    <Button className={styles.btnThem} >Thêm</Button>
                    <Button className={styles.btnHuy}>Hủy</Button>
                </Box>

            </Box>
        </>
    )
}

export default AddUser