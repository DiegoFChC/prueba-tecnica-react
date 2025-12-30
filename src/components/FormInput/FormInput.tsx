import type { JSX, InputHTMLAttributes } from 'react'
import './FormInput.css'
import type { UseFormRegisterReturn } from 'react-hook-form'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  identifier: string
  register: UseFormRegisterReturn<string>
  isRequired?: boolean
  error?: string
}

export function FormInput({
  type,
  identifier,
  label,
  placeholder,
  isRequired = true,
  register,
  error,
  ...rest
}: FormInputProps): JSX.Element {
  return (
    <div className='FormInput'>
      <label htmlFor={identifier}>{label}{isRequired && '*'}</label>
      <input
        type={type}
        id={identifier}
        placeholder={placeholder}
        required={isRequired}
        {...register}
        {...rest}
      />
      <span className='error'>{error ? error : ''}</span>
    </div>
  )
}
