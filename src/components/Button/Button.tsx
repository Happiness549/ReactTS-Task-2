import React from 'react'
import button from './Button.module.css'

interface Props  {
    text: string | number;
    style?: React.CSSProperties;
    className?: string; 
}

const Button: React.FC<Props> = ({ text, style,className }) => {
  return (
    <div>
    <button className={`${button.btn} ${className || ""}`} style={style}>
      {text}
    </button>
    </div>
  )
}

export default Button