import { Box, Breadcrumbs, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
const AddUser = () => {
    return (
        <>
            <div role="presentation" >
                <Breadcrumbs className={styles.breadcrumb} aria-label="breadcrumb">
                    <Link className={`${styles.breadcrumbItem} ${styles.font14}`} color="#1F8FBB" sx={{ color: 'black' }} to={'/admin/user-manager'}>
                        Quản lý người dùng
                    </Link>
                    {/* <Link
                        underline="hover"
                        color="inherit"
                        to={'/admin/main'}
                        
                    >
                        Thêm khu vụ
                    </Link> */}
                    <Typography className={styles.font14} color="text.primary">Tạo tài khoản</Typography>
                </Breadcrumbs>
            </div>
            <Box sx={{ width: '100%', padding: '10px' }}>


                <Box sx={{ border: '2px solid #1F8FBB', padding: '20px', borderRadius: '10px' }}>
                    <Box sx={{ mt: 2, mb: 2, textAlign: 'center' }}>
                        <TextField sx={{ width: '100%' }} id="outlined-basic" label="Họ và tên" variant="outlined" />
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '20px', mt: 3, mb: 2, textAlign: 'center' }}>
                        <TextField sx={{ width: '100%' }} id="outlined-basic" label="Tên tài khoản*" variant="outlined" />
                        <TextField sx={{ width: '100%' }} id="outlined-basic" label="Mật khẩu*" variant="outlined" />
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '20px', mt: 3, mb: 2, textAlign: 'center' }}>
                        <TextField sx={{ width: '100%' }} id="outlined-basic" label="Email" variant="outlined" />
                        <TextField sx={{ width: '100%' }} id="outlined-basic" label="Số điện thoại" variant="outlined" />
                    </Box>
                    <Box sx={{ mt: 2, mb: 2, textAlign: 'center' }}>

                    </Box>
                    <Box sx={{ mt: 3, mb: 2, textAlign: 'center' }}>
                        <TextField sx={{ width: '100%' }} id="outlined-basic" label="Địa chỉ" variant="outlined" />
                    </Box>
                    <Box sx={{ mt: 6, mb: 0, textAlign: 'center', display: 'flex', justifyContent:'space-between' }}>
                        <Button className={styles.btnHuy}>Hủy</Button>
                        <Button className={styles.btnThem} >Thêm</Button>
                    </Box>
                </Box>

            </Box>
        </>
    )
}

export default AddUser