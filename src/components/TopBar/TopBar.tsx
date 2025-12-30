import type { JSX } from 'react'
import './TopBar.css'
import { useAppContext } from '../../context/AppContext'

export function TopBar(): JSX.Element {
  const { userEmail } = useAppContext()
  return (
    <header className='topbar'>
      <img src='logo.svg' alt='logo app' />
      <span>
        {userEmail !== '' ? userEmail.substring(0, 1).toUpperCase() : '?'}
      </span>
    </header>
  )
}
