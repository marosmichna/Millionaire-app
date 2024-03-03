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
        className="block text-sm font-medium text-blue-300"
      >
        {label}
      </label>
      <input
        id={name + "-input"}
        type="text"
        {...register(name)} 
        className="py-2 px-4 outline-none"
      />
      {error && <p className="mt-2 text-sm text-red-500">{error.message}</p>}
    </div>
  )
}

export default TextInput;
