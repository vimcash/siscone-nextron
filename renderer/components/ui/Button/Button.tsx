import React from 'react'
import IconByName from '../IconByName'

export const Button = 
  ({onClick, title, className, icon, primary}:any) => 
    <button 
      style={primary ? {color: "var(--bsp-btn-font-color)", background: "var(--bsp-primary-button)"} : {color: "var(--bsp-btn-font-color)"}}
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