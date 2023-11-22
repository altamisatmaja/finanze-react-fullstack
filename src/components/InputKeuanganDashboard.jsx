import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import finanzelogo from "../assets/logofigma.png";
import InputKeuangan from './InputKeuangan';
import Sidebar from '../includes/Sidebar';


function InputKeuanganDashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        let username = sessionStorage.getItem('username');
        if (username === '' || username === null) {
            navigate('/login');
        }
    }, []);

    
    return (
    <div class="flex min-h-screen flex-row bg-gray-100 text-gray-800 p-5">
        <Sidebar/>
        <main class="main w-full flex-col pl-4 transition-all duration-150 ease-in md:ml-0">
            <div class="h-full items-center justify-center text-start text-3xl font-bold">
            <InputKeuangan />
            </div>
        </main>
    </div>
    );
}

export default InputKeuanganDashboard;
