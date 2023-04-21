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
                    maxLength={15}
                    pattern="^[^\u0103\u0102\u00E2\u00C2\u00EA\u00CA\u00F4\u00D4\u00E1\u00C1\u1EA1\u1EA0\u00E0\u00C0\u1EA3\u1EA2\u1EA7\u1EA6\u1EA5\u1EA4\u1EAD\u1EAC\u1EAB\u1EAA\u1EB1\u1EB0\u1EAF\u1EAE\u1EB3\u1EB2\u1EB7\u1EB6\u1EB5\u1EB4\u00E9\u00C9\u1EB9\u1EB8\u00E8\u00C8\u1EBB\u1EBA\u1EBF\u1EBE\u00EC\u00CC\u1EC1\u1EC0\u1EC5\u1EC4\u1EC3\u1EC2\u1EC9\u1EC8\u0129\u0128\u00F3\u00D3\u1ECD\u1ECC\u00F2\u00D2\u1ECF\u1ECE\u1ED3\u1ED2\u1ED1\u1ED0\u1ED7\u1ED6\u1ED5\u1ED4\u1EDB\u1EDA\u1ED9\u1ED8\u1EE1\u1EE0\u1EDF\u1EDE\u1EE3\u1EE2\u00FA\u00DA\u1EE5\u1EE4\u00F9\u00D9\u1EE7\u1EE6\u1EEB\u1EEA\u1EE9\u1EE8\u1EF1\u1EF0\u1EEF\u1EEE\u1EF5\u1EF4\u1EF3\u1EF2\u00FD\u00DD\u1EF9\u1EF8]"
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
                    maxLength={15}
                    pattern="^[^\u0103\u0102\u00E2\u00C2\u00EA\u00CA\u00F4\u00D4\u00E1\u00C1\u1EA1\u1EA0\u00E0\u00C0\u1EA3\u1EA2\u1EA7\u1EA6\u1EA5\u1EA4\u1EAD\u1EAC\u1EAB\u1EAA\u1EB1\u1EB0\u1EAF\u1EAE\u1EB3\u1EB2\u1EB7\u1EB6\u1EB5\u1EB4\u00E9\u00C9\u1EB9\u1EB8\u00E8\u00C8\u1EBB\u1EBA\u1EBF\u1EBE\u00EC\u00CC\u1EC1\u1EC0\u1EC5\u1EC4\u1EC3\u1EC2\u1EC9\u1EC8\u0129\u0128\u00F3\u00D3\u1ECD\u1ECC\u00F2\u00D2\u1ECF\u1ECE\u1ED3\u1ED2\u1ED1\u1ED0\u1ED7\u1ED6\u1ED5\u1ED4\u1EDB\u1EDA\u1ED9\u1ED8\u1EE1\u1EE0\u1EDF\u1EDE\u1EE3\u1EE2\u00FA\u00DA\u1EE5\u1EE4\u00F9\u00D9\u1EE7\u1EE6\u1EEB\u1EEA\u1EE9\u1EE8\u1EF1\u1EF0\u1EEF\u1EEE\u1EF5\u1EF4\u1EF3\u1EF2\u00FD\u00DD\u1EF9\u1EF8]"

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