import { useState } from 'react'
import './App.css'
import { Link, useOutlet } from 'react-router-dom'
import NavBar from './pages/admin/NavBar'


function App() {
  const currentOutlet = useOutlet()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <h1>로그인</h1>
          <form onSubmit={(e) => {
            e.preventDefault()
            setIsLoggedIn(true)
          }}>
            <input type="text" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />
            <button type="submit">로그인</button>
          </form>
        </div>
      ) : (
        currentOutlet
      )}
      <Link to={"/ceo"}>Ceo 기능 확인용</Link>
      <Link to={"/admin"}>Admin 기능 확인용</Link>
      <div style={{ display: 'flex' }}>
        
        <NavBar/>
        <div style={{ flex: 1, padding: '20px' }}>
          {currentOutlet}
        </div>
      </div>
    </div>
  )
}

export default App
