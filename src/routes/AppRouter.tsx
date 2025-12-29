import { Route, Routes } from 'react-router-dom'
import { Login, Dashboard, Layout, Home, Profile } from '../pages'
import { ProtectedRoute } from './ProtectedRoute'
import type { ReactElement } from 'react'

export function AppRouter(): ReactElement {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route
          path='/actions'
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path='/home'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path='/profile'
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
      </Route>
      <Route path='*' element={<h1>Página no encontrada</h1>} />
    </Routes>
  )
}
