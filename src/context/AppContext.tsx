import type { ReactNode } from 'react'
import { createContext, useContext, useState } from 'react'
import { deleteToken } from '../services'

type AppContextProviderProps = {
  children: ReactNode
}

type AppContextValue = {
  isLogged: boolean
  logIn: () => void
  signOut: () => void
  userEmail: string
  setEmail: (email: string) => void
  loading: boolean
  stopLoading: () => void
  startLoading: () => void
  modalContent: ReactNode
  openModal: (content: ReactNode) => void
  closeModal: () => void
  showModal: boolean
}

const AppContext = createContext<AppContextValue | undefined>(undefined)

export function useAppContext(): AppContextValue {
  const context = useContext(AppContext)
  if (context === undefined)
    throw new Error('AppContextProvider must be used for AppContext')

  return context
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [isLogged, setIsLogged] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [modalContent, setModalContent] = useState<ReactNode>(null)
  const [showModal, setShowModal] = useState(false)

  const logIn = () => {
    setIsLogged(true)
  }

  const signOut = () => {
    setIsLogged(false)
    deleteToken()
  }

  const setEmail = (email: string) => {
    setUserEmail(email)
  }

  const stopLoading = () => {
    setLoading(false)
  }

  const startLoading = () => {
    setLoading(true)
  }

  const openModal = (content: ReactNode) => {
    setShowModal(true)
    setModalContent(content)
  }

  const closeModal = () => {
    setShowModal(false)
    setModalContent(null)
  }

  return (
    <AppContext.Provider
      value={{
        isLogged,
        logIn,
        signOut,
        userEmail,
        setEmail,
        loading,
        stopLoading,
        startLoading,
        modalContent,
        openModal,
        closeModal,
        showModal
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
