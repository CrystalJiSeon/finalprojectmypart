import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main'; // 메인 대시보드 컴포넌트
import Layout from './pages/Layout'; // NavBar + Header 포함된 레이아웃
import SalesManage from './pages/admin/SalesManage';
import SalesStatus from './pages/admin/SalesStatus';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    setIsLoggedIn(true)
  },[])
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/salesManage" element={<SalesManage/>}/>
            <Route path="/salesStatus" element={<SalesStatus/>}/>
          </Routes>
    </BrowserRouter>
    

  );
}

export default App;