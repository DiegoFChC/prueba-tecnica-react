import { z } from 'zod'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const loginSchema = z.object({
  email: z.string({
    required_error: 'El correo es requerido'
  })
  .min(1, { message: 'El correo es requerido' })
  .regex(emailRegex, 'Formato inválido (ejemplo@dominio.com)'),
  
  password: z.string({
    required_error: 'La contraseña es requerida'
  })
  .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
})