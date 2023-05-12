
import styles from "./index.module.css"
import logo from './../../asset/img/logo-leanway.png'
import FormLoginIssue from '../../components/Form/FormLoginIssue'
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { Link } from 'react-router-dom';
import FormRegister from '../../components/Form/FormRegister'
import * as React from 'react';
import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import toastr from 'toastr';
import 'toastr/build/toastr.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
export function Login() {

    return (
        <div className={styles.section}>
            <div className="container">
                <div className={`row ${styles.full_height} justify-content-center`}>
                    <div className="col-12 text-center align-self-center py-5">
                        <div className={`${styles.section} pb-5 pt-5 pt-sm-2 text-center`}>
                            <h6 className="mb-0 pb-3"><span>Đăng nhập </span><span>Đăng ký</span></h6>

                            <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                            <label for="reg-log"></label>
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div className="card-front">
                                        <div className={styles.centerWrap}>
                                            <div className="section text-center">
                                                <FormLoginIssue />
                                                <p className="mb-0 mt-4 text-center">
                                                    <Link className={styles.link} to={'/forgot-password'} >Quên mật khẩu ?</Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className={styles.centerWrap}>
                                            <div className="section text-center">
                                                <FormRegister />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

const theme = createTheme();

export function LoginAdmin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const handleChangeUsername = (e) =>{
        setUsername(e.target.value);
    }
    const handleChangePassword = (e) =>{
        setPassword(e.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            localStorage.setItem('token_admin', 'xxx')
            navigate('main')
        } else {
            toastr.warning("Tài khoản và mật khẩu không được để trống");
        }

    };

    function validate() {
        return username !== '' || password !== '';
    }
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <img src={logo} width="100%" alt="" srcset="" />
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                        onChange={handleChangeUsername}
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Tài khoản"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                        onChange={handleChangePassword}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Mật khẩu"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Đăng nhập
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Quên mật khẩu ?
                                </Link>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}
