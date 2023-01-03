import React from 'react'

export const Button = 
  ({onClick, title, className, icon}:any) => 
    <button 
      style={{color: "var(--bsp-btn-font-color)"}}
      type="submit" 
      className={'btn ' + className} 
      onClick={onClick}>
        {title}
    </button>