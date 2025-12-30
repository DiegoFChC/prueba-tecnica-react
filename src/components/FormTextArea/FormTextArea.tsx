import type {JSX, TextareaHTMLAttributes } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'
import './FormTextArea.css'

interface FormTextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  identifier: string
  register: UseFormRegisterReturn<string>
  isRequired?: boolean
  error?: string
}

export function FormTextArea({
  identifier,
  label,
  placeholder,
  isRequired = true,
  register,
  error,
  ...rest
}: FormTextAreaProps): JSX.Element {
  return (
    <div className='formTextArea'>
      <label htmlFor={identifier}>
        {label}
        {isRequired && '*'}
      </label>
      <textarea
        id={identifier}
        placeholder={placeholder}
        required={isRequired}
        maxLength={201}
        {...register}
        {...rest}
      />
      <span className='error'>{error ? error : ''}</span>
    </div>
  )
}
