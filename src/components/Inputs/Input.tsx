import React, { type ChangeEvent } from 'react'

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label: string;
    type: string;
    placeholder: string;
<<<<<<< HEAD
    
=======
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
>>>>>>> 546f428b8af6c329fc725591b6259db1019d0bed
}

export const Input: React.FC<InputFieldProps> = ({label, type, placeholder, value, onChange}) => {
  return (
    <div>
        <label>{label}</label>
<<<<<<< HEAD
        <input  type={type} placeholder={placeholder} />
=======
        <input  type={type}
                placeholder={placeholder} 
                value={value}
                onChange={onChange}/>
       

>>>>>>> 546f428b8af6c329fc725591b6259db1019d0bed
    </div>
  )
}
