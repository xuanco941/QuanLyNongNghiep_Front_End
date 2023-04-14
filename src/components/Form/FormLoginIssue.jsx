
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../redux/actions/loginAction'
import LoadingFlag from '../LoadingFlag/LoadingFlag'
import styles from "./Form.module.css"
import logo from "./../../asset/img/logo-leanway.png"


const FormLoginIssue = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    //const data = useSelector(state => state);
    // const history = useHistory();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const token = localStorage.getItem('token');
    useEffect(() => {

        if (token) {
            navigate('/issue-dashboard', { replace: true });
        }
    }, [token, navigate]);

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        dispatch(login(username, password)).then(() => {
            setIsLoading(false);
            navigate("/issue-dashboard");
            window.history.replaceState(null, null, window.location.pathname);
        })
    };


    return (
        <div>
            <LoadingFlag isLoading={isLoading} />
            <form onSubmit={handleSubmit}>

                <div className={styles.logo}>
                    <img src={logo} width="100%" alt="" srcset="" />
                </div>
                <div className="form-group">
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} className={styles.formStyle} placeholder="ID*" />
                    <i className={`${styles.inputIcon} uil uil-at`}></i>
                </div>
                <div className="form-group mt-2">
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className={styles.formStyle} placeholder="Mật khẩu*" />
                    <i className={`${styles.inputIcon} uil uil-lock-alt`}></i>
                </div>
                <button type='submit' className={`${styles.btn} mt-4`} name='submit'>Đăng nhập</button>

            </form>
        </div>
    )
}

export default FormLoginIssue