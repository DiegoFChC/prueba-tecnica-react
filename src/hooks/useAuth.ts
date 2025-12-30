import { useAppContext } from '../context/AppContext'
import { loginAPI, saveToken } from '../services'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

type signInProps = {
  email: string
  password: string
}

type useAuthReturns = {
  signIn: ({ email, password }: signInProps) => void
}

export function useAuth(): useAuthReturns {
  const { logIn, setEmail, startLoading, stopLoading } = useAppContext()
  const navigate = useNavigate()
  const signIn = async ({ email, password }: signInProps) => {
    try {
      startLoading()
      const token = await loginAPI({ email, password })
      saveToken(token)
      logIn()
      setEmail(email)
      navigate('/actions')
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      } else {
        toast.error('Ocurrió un error inesperado')
      }
    } finally {
      stopLoading()
    }
  }

  return { signIn }
}
