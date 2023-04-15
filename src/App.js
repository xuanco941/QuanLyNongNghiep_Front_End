import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate as navigate } from 'react-router-dom';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import { useSelector } from 'react-redux';
import IssueDashboard from './screens/Dashboard/IssueDashboard';
import AdminDashboard from './screens/Dashboard/AdminDashboard';
import Login from './screens/Login/Login';


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
                <Route path='/' element={token ? <IssueDashboard /> : <Login />} />
                <Route path='/issue-dashboard' element={token ? <IssueDashboard /> : <Login />} />
                <Route path='/admin-dashboard' element={<AdminDashboard />} />
            </Routes>
        );
    }

export default App;


