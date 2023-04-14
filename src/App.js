import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate as navigate } from 'react-router-dom';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import IssueDashboard from './screens/Dashboard/IssueDashboard';
import AdminDashboard from './screens/Dashboard/AdminDashboard';
import Login from './screens/Login/Login';


function App() {
    
    return (


        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route path='/issue-dashboard' element={<IssueDashboard />} />
                <Route path='/admin-dashboard' element={<AdminDashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;


