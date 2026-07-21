import React, { type ChangeEvent, type CSSProperties } from 'react'

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    styles?: React.CSSProperties;
    className?: string
}

export const Input: React.FC<InputFieldProps> = ({label, type, placeholder, value, onChange, styles}) => {
  return (
    <div>
        <label>{label}</label>
        <input  type={type}
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
                style={styles}/>
    </div>
  )
}
