import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../pages'
import { Dashboard } from '../pages'
import { ProtectedRoute } from './ProtectedRoute'
import type { ReactElement } from 'react'

export function AppRouter(): ReactElement {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route
        path='/dashboard'
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}
