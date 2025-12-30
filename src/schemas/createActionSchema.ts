import { z } from 'zod'

export const createActionSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'El nombre debe tener al menos 3 caracteres' })
    .max(50, { message: 'El nombre es demasiado largo' })
    .refine((val) => val.trim().length > 0, {
      message: 'El nombre es requerido',
    }),

  description: z
    .string()
    .min(3, { message: 'La descripción debe tener al menos 3 caracteres' })
    .max(200, {
      message: 'La descripción debe tener a lo mucho 200 caracteres',
    })
    .refine((val) => val.trim().length > 0, {
      message: 'La descripción es requerida',
    }),

  color: z
    .string()
    .refine((val) => val.trim().length > 0, {
      message: 'El color es requerido',
    })
    .refine((val) => /^#([A-Fa-f0-9]{3}){1,2}$/.test(val), {
      message: 'Debe ser un formato hexadecimal válido (ej: #FF5733)',
    }),
})
