import React from 'react'
import button from './Button.module.css'

interface Props  {
    text: string | number;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    style?: React.CSSProperties;
    className?: string; 
}

const Button: React.FC<Props> = ({ text, style, className, onClick }) => {
  return (
    <div>
    <button className={`${button.btn} ${className || ""}`} style={style} onClick={onClick}>
      {text}
    </button>
    </div>
  )
}

export default Button