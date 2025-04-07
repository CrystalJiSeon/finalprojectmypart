import { useState } from 'react'
import './App.css'
import { useOutlet } from 'react-router-dom'

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
    </div>
  )
}

export default App
