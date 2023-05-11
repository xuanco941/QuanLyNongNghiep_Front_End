import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {login} from './../../../redux/actions/loginAction'
import styles from './../Form.module.css'
import toastr from 'toastr';
import 'toastr/build/toastr.css';
import logo from "./../../../asset/img/logo-leanway.png"
import LoadingFlag from '../../LoadingFlag'



const FormLoginIssue = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        if (validate()) {
            dispatch(login(username, password)).then(() => {
                setIsLoading(false);
                navigate("/main");
            })
        } else {
            toastr.warning("Tài khoản hoặc mật khẩu không được để trống");
            setIsLoading(false);
        }

    };

    function validate() {
        return username !== "" || password !== "";
    }

    return (
        <div>
            <LoadingFlag isLoading={isLoading} />
            <form onSubmit={handleSubmit}>

                <div className={styles.logo}>
                    <img src={logo} width="100%" alt="" srcset="" />
                </div>
                <div className="form-group">
                    <input type="text" maxLength={50}

                        value={username} onChange={e => setUsername(e.target.value)} className={styles.formStyle} placeholder="ID*" />
                    <i className={`${styles.inputIcon} uil uil-at`}></i>
                </div>
                <div className="form-group mt-2" >
                    <input type="password" maxLength={50}
                        pattern=".{4,}"
                        value={password} onChange={e => setPassword(e.target.value)} className={styles.formStyle} placeholder="Mật khẩu*" title="Mật khẩu phải có ít nhất 4 ký tự" />
                    <i className={`${styles.inputIcon} uil uil-lock-alt`}></i>
                </div>
                <button type='submit' className={`${styles.btn} mt-4`} name='submit'>Đăng nhập</button>

            </form>
        </div>
    )
}

export default FormLoginIssue