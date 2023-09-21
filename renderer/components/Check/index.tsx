import React from 'react'
import style from './style.module.css'
export const Check = ({className}:any) => {
  return (
    <input 
      type='checkbox' 
      className={`${style.container} ${className}`} />
  )
}
