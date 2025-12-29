import { useAppContext } from '../context/AppContext'
import { loginAPI, saveToken } from '../services'
import { useNavigate } from 'react-router-dom'

type useAuthProps = {
  email: string
  password: string
}

export function useAuth() {
  const { logIn, setEmail } = useAppContext()
  const navigate = useNavigate()
  const signIn = async ({ email, password }: useAuthProps) => {
    try {
      const token = await loginAPI({ email, password })
      saveToken(token)
      logIn()
      setEmail(email)
      navigate('/actions')
    } catch {
      console.log('error')
    }
  }

  return { signIn }
}
