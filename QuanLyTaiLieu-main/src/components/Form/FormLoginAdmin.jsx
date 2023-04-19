import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from "./Form.module.css"
import logo from "./../../asset/img/logo-leanway.png"
const FormLoginAdmin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }
    const handleSubmit = event => {
        event.preventDefault();

        // Thực hiện xác thực tài khoản và mật khẩu ở đây
        if (username === 'admin' && password === 'admin') {
            // Nếu xác thực thành công, chuyển hướng đến trang admin
            navigate("/admin-dashboard")
        } else {
            // Nếu xác thực thất bại, hiển thị thông báo lỗi
            alert('Tài khoản hoặc mật khẩu không đúng');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.logo}>
                <img src={logo} width="100%" alt="" srcset="" />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className={styles.formStyle}
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="Tài khoản*"
                />
                <i className={`${styles.inputIcon} uil uil-at`}></i>
            </div>
            <div className="form-group mt-2">
                <input
                    type="password"
                    className={styles.formStyle}
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Mật khẩu*" />
                <i className={`${styles.inputIcon} uil uil-lock-alt`}></i>
            </div>
            <button type='submit' className={`${styles.btn} mt-4`} name='submit'>Đăng nhập</button>

        </form>
    )
}

export default FormLoginAdmin