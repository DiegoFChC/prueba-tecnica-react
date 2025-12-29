import type { JSX, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import './SidebarLink.css'

type SidebarLinkProps = {
  children: ReactNode
  link: string
}

export function SidebarLink({ children, link }: SidebarLinkProps): JSX.Element {
  return (
    <NavLink to={link} className='sidebarLink'>
      {children}
    </NavLink>
  )
}
