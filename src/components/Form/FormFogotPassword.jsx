

import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import styles from './Form.module.css'
import toastr from 'toastr';
import 'toastr/build/toastr.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import { Button, TextField } from '@mui/material';
import LoadingFlag from '../LoadingFlag/LoadingFlag'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import forgot from '../../redux/actions/forgotPasswordAction';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    boxShadow: 'none',
    color: theme.palette.text.secondary,
}));

const FormFogotPassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('');

    const handleChangeUsername = event =>{
        setUsername(event.target.value);
        
    }
    
    const handleClickBack = () =>{
        navigate(-1);
    }

    const handleSubmit= ()=>{
        if(validate()){
            setIsLoading(true);
            dispatch(forgot(username)).then(()=>{
                setIsLoading(false);
            });
        }else{
            toastr.error("Tài khoản không được để trống")
        }
        
    }

    const validate = ()=>{
        return username !== "";
    }
    return (
        <div>
            <form className={styles.formForgot} >
            <LoadingFlag isLoading={isLoading} />
                <ArrowBackIcon onClick={()=>handleClickBack()} className={styles.arrowBack} color="primary" />
                <Stack sx={{ boxShadow: 'none' }} spacing={2}>
                    <Item>
                        <TextField
                        onChange={handleChangeUsername}
                            required
                            id="outlined-required"
                            label="Tài khoản"
                            sx={{ width: "100%" }}
                        />

                    </Item>
                    <Item>
                        <Button onClick={()=>handleSubmit()} variant="contained">Đặt lại mật khẩu</Button>
                    </Item>

                </Stack>


            </form>

        </div>
    )
}

export default FormFogotPassword