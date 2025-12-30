import { type JSX } from 'react'
import { Button, FormInput } from '../../components'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '../../hooks/useAuth'
import { loginSchema } from '../../schemas/loginSchema'
import './Login.css'

export function Login(): JSX.Element {
  const { signIn } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = handleSubmit((data) => {
    const { email, password } = data
    signIn({ email, password })
  })

  return (
    <section className='login'>
      <div className='container'>
        <img src='logo.svg' alt='logo app' />
        <form className='loginForm' onSubmit={onSubmit}>
          <h1>¡Empieza a conectar tu comunidad ante buenas acciones!</h1>
          <div className='inputs'>
            <FormInput
              identifier='email'
              type='text'
              label='Correo Electrónico'
              placeholder='Ingresar correo'
              error={errors.email?.message}
              register={register('email', {
                required: true,
                onChange: () => trigger('email'),
                onBlur: () => trigger('email'),
              })}
            />
            <FormInput
              identifier='password'
              type='password'
              label='Contraseña'
              placeholder='Ingresa tu contraseña'
              error={errors.password?.message}
              register={register('password', {
                required: true,
                onChange: () => trigger('password'),
                onBlur: () => trigger('email'),
              })}
            />
            <a href='#'>Recuperar contraseña</a>
          </div>
          <Button type='submit' fill disabled={!isValid}>
            Ingresar
          </Button>
        </form>
      </div>
    </section>
  )
}
