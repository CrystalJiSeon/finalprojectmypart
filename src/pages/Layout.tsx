import { useState } from 'react'
import { Link, useOutlet } from 'react-router-dom'
import NavBar from './admin/NavBar'

import '../../public/HeaderCss.css'
import '../../public/AdminNavCss.css'
import '../../public/MainCss.css'
import '../../public/LayoutCss.css'
import Toast from '../components/common/Toast'; // 토스트 컴포넌트
import Header from './admin/Header'


function Layout({currentMenu, children}) {

  return (
    <div className='container'>
      <Header/>
      <div className="main-container">
        <NavBar currentMenu={currentMenu}/>
        {children}
      </div>  
    </div>

  )
}

export default Layout
