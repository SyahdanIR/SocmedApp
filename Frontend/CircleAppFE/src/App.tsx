import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/Register'

const router = createBrowserRouter([
  {path: '/', element: <Dashboard />},
  {path: '/login', element: <Login />},
  {path: '/register', element: <Register />},
])
function App() {
  return (
    <>
      <div className="flex flex-col bg-black text-white min-h-screen">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
