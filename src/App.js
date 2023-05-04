import React from 'react';
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate as navigate } from 'react-router-dom';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import { useSelector } from 'react-redux';
import IssueDashboard from './screens/Dashboard/IssueDashboard';
import AdminDashboard from './screens/Dashboard/AdminDashboard';
import Detail from './screens/Detail/Detail';
import Login from './screens/Login/Login';
import FormFogotPassword from './components/Form/FormFogotPassword';


    function App() {
        const token = localStorage.getItem("token");
        const selector = useSelector(state => state.login);

        const navigate = useNavigate();

        useEffect(() => {
            if (!token) {
                navigate("/");
            }
        }, []);

        return (


            <Routes>
                <Route exact  path='/' element={token ? <IssueDashboard /> : <Login />} />
                <Route path='/issue-dashboard' element={token ? <IssueDashboard /> : <Login />} />
                <Route path='/detail' element={<Detail />} />

                <Route path='/admin-dashboard' element={<AdminDashboard />} />
                <Route path='/forgot-password' element={<FormFogotPassword />} />
            </Routes>
        );
    }

export default App;


