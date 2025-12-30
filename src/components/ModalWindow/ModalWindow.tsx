import type { JSX } from 'react'
import { useAppContext } from '../../context/AppContext'
import './ModalWindow.css'

export function ModalWindow(): JSX.Element | null {
  const { showModal, closeModal, modalContent } = useAppContext()

  if (!showModal) return null

  return (
    <div className='modal' onClick={closeModal}>
      <div className='content' onClick={(e) => e.stopPropagation()}>
        {modalContent}
      </div>
    </div>
  )
}
