import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useOutlet } from 'react-router-dom'

function App() {
  const currentOutlet=useOutlet()
  return (
    <div>
     {currentOutlet}
    </div>
  )
}

export default App
