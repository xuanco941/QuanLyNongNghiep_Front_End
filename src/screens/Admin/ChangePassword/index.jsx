import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, Checkbox, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material'
import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';

const ChangePassword = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [showPasswordAgain, setShowPasswordAgain] = React.useState(false);

    const handleClickShowPasswordAgain = () => setShowPasswordAgain((show) => !show);

    const handleMouseDownPasswordAgain = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <Box >
                <Typography sx={{ textAlign: 'center', margin:'30px' }} variant="h5" gutterBottom>
                    Thay đổi mật khẩu
                </Typography>
                <Box sx={{textAlign:'center'}}>
                    <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                        <Typography sx={{ fontWeight: '700', textAlign:'left' }}>
                            Nhập mật khẩu mới
                        </Typography>

                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Nhập mật khẩu mới'
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }

                        />
                    </FormControl>
                </Box>
                <Box sx={{textAlign:'center'}}>
                    <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                        <Typography sx={{ fontWeight: '700', textAlign:'left' }}>
                            Nhập lại mật khẩu
                        </Typography>

                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPasswordAgain ? 'text' : 'password'}
                            placeholder='Nhập lại mật khẩu'
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPasswordAgain}
                                        onMouseDown={handleMouseDownPasswordAgain}
                                        edge="end"
                                    >
                                        {showPasswordAgain ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }

                        />
                    </FormControl>
                </Box>
                
                <Box sx={{textAlign:'center'}}>
                    <Button sx={{padding:'7px 50px', backgroundColor:'black', width:'50ch'}}>Đổi mật khẩu</Button>
                </Box>
            </Box>
        </>
    )
}

export default ChangePassword