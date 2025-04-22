import { useState } from 'react'
import { Link, useOutlet } from 'react-router-dom'
import NavBar from './pages/admin/NavBar'
import '../public/LayoutCss.css'
import '../public/HeaderCss.css'
import Toast from '../components/common/Toast'; // 토스트 컴포넌트

function App() {
  const currentOutlet = useOutlet()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
      
      <Link to={"/ceo"}>Ceo 기능 확인용</Link>
      <Link to={"/admin"}>Admin 기능 확인용</Link>
      <NavBar/>
      <div className='contianer'>
    
        <div className='main-container' >
          {currentOutlet}
        </div>
      </div>
    </div>
  )
}

export default App
