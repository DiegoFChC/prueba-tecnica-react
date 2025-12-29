import type { ReactNode } from 'react'
import './Button.css'

type ButtonProps = {
  children: ReactNode
  handleClick: () => void
}

export function Button({ children, handleClick }: ButtonProps) {
  return (
    <button onClick={handleClick} className='myButton'>
      {children}
    </button>
  )
}
