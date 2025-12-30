import type { ReactNode } from 'react'
import './Button.css'

type ButtonType = 'button' | 'submit' | 'reset'

type ButtonProps = {
  children: ReactNode
  handleClick?: () => void
  type?: ButtonType
  fill?: boolean
  outlined?: boolean
  disabled?: boolean
}

export function Button({
  children,
  handleClick,
  type = 'button',
  fill = true,
  outlined = false,
  disabled = false
}: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      className={`myButton ${fill && 'fill'} ${outlined && 'outlined'}`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
