/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldError, UseFormRegister } from "react-hook-form";

interface TextInputProps {
    name: string,
    label: string,
    register: UseFormRegister<any>,
    error?: FieldError,
}

const TextInput = ({ name, label, register, error }: TextInputProps) => {
  return (
    <div className="mb-3">
      <label 
        htmlFor={name + "-input"}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        id={name + "-input"}
        type="text"
        {...register(name)} 
      />
      {error && <p className="mt-2 text-sm text-red-500">{error.message}</p>}
    </div>
  )
}

export default TextInput;
