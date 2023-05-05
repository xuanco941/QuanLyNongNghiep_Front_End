import React from 'react'
import { useState } from 'react'
import {  useDispatch } from 'react-redux'
import toastr from 'toastr';
import 'toastr/build/toastr.css';
import styles from "./../Form.module.css"
import logo from "./../../../asset/img/logo-leanway.png"

import { register } from './../../../redux/actions/registerAction'
import LoadingFlag from '../../LoadingFlag';


const FormRegister = () => {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();
    //const data = useSelector((state) => state.register);

    function handleFullnameChange(event) {
        setFullName(event.target.value);
    }
    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }
    function handleEmailChange(event) {
        setEmail(event.target.value);
    }
    function handlePhonenumberChange(event) {
        setPhoneNumber(event.target.value);
    }
    function handleAddressChange(event) {
        setAddress(event.target.value);
    }


    const handleSubmit = event => {
        event.preventDefault();
        if(validateRegister()){
            setIsLoading(true);
            dispatch(register(fullName, username, email, phoneNumber, address)).then(()=>{
                setIsLoading(false);
            })
        }else{
            toastr.error("Không được để trống thông tin"); 
        }
        

    }
    const validateRegister = () => {
        return fullName !== '' && username !== '' && email !== '' && phoneNumber !== '' && address !== '';
    }
    // useEffect(() => {
    //     console.log(data);
    // }, [data]);
    return (
        <form onSubmit={handleSubmit}>
            <LoadingFlag isLoading={isLoading} />
            <div className={styles.logo}>
                <img src={logo} width="100%" alt="" srcset="" />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    className={styles.formStyle}
                    value={fullName}
                    onChange={handleFullnameChange}
                    placeholder="Họ và tên*"
                />
                <i className={`${styles.inputIcon} uil uil-info-circle`}></i>
            </div>

            <div className="form-group mt-2">
                <input
                    type="text"
                    className={styles.formStyle}
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="Tài khoản*"
                />
                <i className={`${styles.inputIcon} uil uil-user-circle`}></i>
            </div>

            <div className="form-group mt-2">
                <input
                    type="email"
                    className={styles.formStyle}
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Email*"
                />
                <i className={`${styles.inputIcon} uil uil-at`}></i>
            </div>

            <div className="form-group mt-2">
                <input
                    type="text"
                    className={styles.formStyle}
                    value={phoneNumber}
                    onChange={handlePhonenumberChange}
                    placeholder="Điện thoại*"
                />
                <i className={`${styles.inputIcon} uil uil-phone-alt`}></i>
            </div>

            <div className="form-group mt-2">
                <input
                    type="text"
                    className={styles.formStyle}
                    value={address}
                    onChange={handleAddressChange}
                    placeholder="Địa chỉ*"
                />
                <i className={`${styles.inputIcon} uil uil-location-point`}></i>
            </div>

            <button type='submit' className={`${styles.btn} mt-4`} name='submit'>Đăng ký</button>

        </form>
    )
}

export default FormRegister