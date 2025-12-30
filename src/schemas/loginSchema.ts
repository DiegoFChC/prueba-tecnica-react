import { z } from 'zod'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const loginSchema = z.object({
  email: z.string()
  .min(1, { message: 'El correo es requerido' })
  .regex(emailRegex, 'Formato inválido (ejemplo@dominio.com)'),
  
  password: z.string()
  .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
})