import type { JSX } from 'react'
import { Button, FormInput, FormTextArea } from '../../components'
import { useForm } from 'react-hook-form'
import { useAppContext } from '../../context/AppContext'
import { createActionSchema } from '../../schemas/createActionSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import type { action } from '../../hooks/useActions'
import './CreateActionForm.css'

type CreateActionFormProps= {
  handleCreateAction: ({name, description, color}: action) => void
}

export function CreateActionForm({ handleCreateAction }: CreateActionFormProps): JSX.Element {
  const { closeModal } = useAppContext()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm({
    resolver: zodResolver(createActionSchema),
    mode: 'onChange',
  })

  const onSubmit = handleSubmit((data) => {
    const { name, description, color } = data as action
    handleCreateAction({ name, description, color })
  })

  return (
    <form onSubmit={onSubmit} className='createAction'>
      <button className='closeBtn' onClick={closeModal} type='button'>
        ×
      </button>
      <div className='formContent'>
        <h2>Crear acción</h2>
        <div className='inputs'>
          <FormInput
            identifier='name'
            type='text'
            label='Nombre de la acción'
            placeholder='Escribe el nombre de la nueva acción'
            error={errors.name?.message}
            register={register('name', {
              required: true,
              onChange: () => trigger('name'),
              onBlur: () => trigger('name'),
            })}
          />
          <FormTextArea
            identifier='description'
            label='Descripción de la nueva acción'
            placeholder='Agregar descripción'
            error={errors.description?.message}
            register={register('description', {
              required: true,
              onChange: () => trigger('description'),
              onBlur: () => trigger('description'),
            })}
          />
          <FormInput
            identifier='color'
            type='text'
            label='Color'
            placeholder='Registra color código HEX'
            error={errors.color?.message}
            register={register('color', {
              required: true,
              onChange: () => trigger('color'),
              onBlur: () => trigger('color'),
            })}
          />
        </div>
      </div>
      <div className='buttons'>
        <Button handleClick={closeModal} outlined={true}>
          Cancelar
        </Button>
        <Button disabled={!isValid} type='submit'>Crear</Button>
      </div>
    </form>
  )
}
