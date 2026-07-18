import React from 'react'

type Props = {
    variant?: String,
    children?: React.ReactNode,
    className?: string,
    style?: React.CSSProperties
}

export const Text: React.FC<Props> = ({variant, children, style}) => {
  if(variant === 'span') return <span style={style}>{children}</span>
  if(variant === 'h1') return <h1 style={style}>{children}</h1>
  if(variant === 'h2') return <h2 style={style}>{children}</h2>
  if(variant === 'h3') return <h3 style={style}>{children}</h3>
  if(variant === 'h4') return <h4 style={style}>{children}</h4>
  if(variant === 'p') return <p style={style}>{children}</p>
   


    return (
    <div style={style}>{children}</div>
  )
}