import React from 'react'
import {inputLabel as Interface} from './Interface'

export const InputLabel = ({title, onChangeValue, type = 'text', disabled = false, value}:Interface, ) => (
  <div className="form-floating mb-3">
    <input 
      type={type} 
      className="form-control" 
      value={value} 
      placeholder="name@example.com" 
      onChange={onChangeValue} 
      disabled={disabled}/>
    <label 
      style={{color: "var(--bsp-floating-label)"}}>
        {title}
    </label>
  </div>
)