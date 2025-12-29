import { deleteToken, getToken } from '../services'
import { useAppContext } from '../context/AppContext'
import { Navigate } from 'react-router-dom'
import type { ReactNode } from 'react'

type ProtectedRouteProps = {
  children: ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token = getToken()
  const { isLogged } = useAppContext()

  if (!token || !isLogged) {
    deleteToken()
    return <Navigate to='/' />
  }

  return children
}
