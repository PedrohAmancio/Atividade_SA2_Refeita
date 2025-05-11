import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Home from './Pages/Home'
import { RouterProvider } from 'react-router-dom'
import router from "./Rotas";
import createBrowserRouter from './Rotas'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    {/* <App /> */}
  </StrictMode>,
)
