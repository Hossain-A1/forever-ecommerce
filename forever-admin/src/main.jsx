import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Toaster/>
    <App />
  </BrowserRouter>,
)
