import React from 'react'

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label: string;
    type: string;
    placeholder: string;
    
}

export const Input: React.FC<InputFieldProps> = ({label, type, placeholder}) => {
  return (
    <div>
        <label>{label}</label>
        <input  type={type} placeholder={placeholder} />
    </div>
  )
}
