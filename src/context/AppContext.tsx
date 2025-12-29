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

  return (
    <AppContext.Provider
      value={{ isLogged, logIn, signOut, userEmail, setEmail }}
    >
      {children}
    </AppContext.Provider>
  )
}
