import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import router from './router'
import App from './App'
import Login from './pages/Login'
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <App/>
)
