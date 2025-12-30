import { deleteToken, getToken } from '../services'
import { useAppContext } from '../context/AppContext'
import { Navigate, Outlet } from 'react-router-dom'

export function ProtectedRoute() {
  const token = getToken()
  const { isLogged } = useAppContext()

  if (!token || !isLogged) {
    deleteToken()
    return <Navigate to='/' />
  }

  return <Outlet />
}
