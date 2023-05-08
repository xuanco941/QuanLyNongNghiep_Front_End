import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import IssueDashboard from './screens/Dashboard/IssueDashboard/index';
import AdminDashboard from './screens/Dashboard/AdminDashboard/index';
import Detail from './screens/Detail/index';
import Login from './screens/Login/Login';
import FormFogotPassword from './components/Form/FormForgotPassword';



    function App() {
        const token = localStorage.getItem("token");
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


