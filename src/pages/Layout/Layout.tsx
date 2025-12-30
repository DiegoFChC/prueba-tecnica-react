import type { ReactNode } from 'react'
import { Sidebar, TopBar } from '../../components'
import './Layout.css'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <main className='layout'>
      <TopBar />
      <div className='container'>
        <Sidebar />
        {children}
      </div>
    </main>
  )
}
