import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import react router
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

// import Toast
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './index.css'
import Login from './pages/Login/Login'
import { AuthProvider } from './contexts/AuthContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer />
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
