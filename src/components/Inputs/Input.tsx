import React, { type ChangeEvent } from 'react'

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    styles?: React.CSSProperties;
    className?: string;
    error: boolean;
    errorMessage: string
}

export const Input: React.FC<InputFieldProps> = ({label, type, placeholder, value, onChange, styles,error,errorMessage}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        className={error ? "input error" : "input"}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={styles}
        required
      />
      {error && <span className="error-message">{errorMessage}</span>}
    </div>
  )
}
