import React from 'react'
import styles from "./index.module.css"
import FormLoginIssue from '../../components/Form/FormLoginIssue'
import "./styles.css";
import { Link } from 'react-router-dom';
import FormRegister from '../../components/Form/FormRegister'

function Login() {

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

export default Login