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
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
