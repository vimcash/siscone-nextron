import React from 'react'
import IconByName from '../IconByName'

export const Button = 
  ({onClick, title, className, icon}:any) => 
    <button 
      style={{color: "var(--bsp-btn-font-color)"}}
      type="submit" 
      className={'btn ' + className} 
      onClick={onClick}>
        <span>
          {icon ? <IconByName icon={icon} /> : undefined}
          { title ?
              <label 
                style={{color: "var(--bsp-btn-font-color)"}} 
                className="d-block">
                  {title}
              </label>
            :
              undefined
          }
        </span>
    </button>