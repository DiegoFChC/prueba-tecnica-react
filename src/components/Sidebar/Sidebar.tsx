import type { JSX } from 'react'
import { ActionIcons } from '../Icons/ActionIcon'
import { LogOutIcon } from '../Icons/LogOutIcon'
import { SidebarLink } from './SidebarLink/SidebarLink'
import { Button } from '../Button/Button'
import { useAppContext } from '../../context/AppContext'
import './Sidebar.css'
import { useNavigate } from 'react-router-dom'

type MenuItem = {
  name: string
  link: string
  icon: JSX.Element
}

const LINKS: MenuItem[] = [
  { name: 'Home', link: '/home', icon: <ActionIcons /> },
  { name: 'Acciones', link: '/actions', icon: <ActionIcons /> },
  { name: 'Perfil', link: '/profile', icon: <ActionIcons /> },
]

export function Sidebar(): JSX.Element {
  const { signOut } = useAppContext()
  const naviigate = useNavigate()

  const handleLogOut = () => {
    signOut()
    naviigate('/')
  }

  return (
    <nav className='sidebar'>
      <div className='links'>
        <img src='backgroundSidebar.svg' alt='Background and logo app' />
        <ul className='linksList'>
          {LINKS.map((item, index) => {
            const { name, link, icon } = item
            return (
              <SidebarLink key={index} link={link}>
                {icon}
                {name}
              </SidebarLink>
            )
          })}
        </ul>
      </div>
      <Button handleClick={handleLogOut} fill={false}>
        <LogOutIcon /> Cerrar Sesión
      </Button>
    </nav>
  )
}
