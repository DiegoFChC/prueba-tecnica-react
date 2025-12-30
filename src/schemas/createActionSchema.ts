import { z } from 'zod'

export const createActionSchema = z.object({
  name: z.string({
    required_error: 'El nombre es requerido'
  })
  .min(3, { message: 'El nombre debe tener al menos 3 caracteres' })
  .max(50, { message: 'El nombre es demasiado largo' }),

  description: z.string({
    required_error: 'La descripción es requerida'
  })
  .min(3, { message: 'La descripción debe tener al menos 3 caracteres' })
  .max(200, { message: 'La descripción debe tener a lo mucho 200 caracteres' }),

  color: z.string({
    required_error: 'El color es requerido'
  })
  .refine((val) => /^#([A-Fa-f0-9]{3}){1,2}$/.test(val), {
    message: 'Debe ser un formato hexadecimal válido (ej: #FF5733)'
  })
})