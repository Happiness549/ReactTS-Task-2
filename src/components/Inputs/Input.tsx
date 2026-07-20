import React, { type ChangeEvent } from 'react'

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputFieldProps> = ({label, type, placeholder, value, onChange}) => {
  return (
    <div>
        <label>{label}</label>
        <input  type={type}
                placeholder={placeholder} 
                value={value}
                onChange={onChange}/>
       

    </div>
  )
}
