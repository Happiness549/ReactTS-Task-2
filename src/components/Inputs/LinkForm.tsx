import React from 'react'
import styles from './input.module.css'

interface LinkFormProps{
    id?: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    style?: React.CSSProperties;
    label: string;
    error?: string;
    name?: string;
    ref?: React.RefObject<HTMLInputElement | null>
}

export const LinkForm:React.FC<LinkFormProps> = ({id, value, onChange, style, label, error, name, ref}) => {
  return (
     <div className={styles['input-container']}>
        <label className={styles['input-label']}>{label}</label>
        <input ref={ref} name={name} type="text" id={id} style={style} value={value} onChange={onChange} className={styles.input}/>
        { error && <span className={styles['input-error']}>{error}</span>}
    </div>
  )
}
