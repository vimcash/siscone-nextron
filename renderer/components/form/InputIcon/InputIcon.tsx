import React from 'react'
import { onPressEnter as onEnterDo } from '../../../utils'
import { IconByName } from '../../ui'

export const InputIcon = ({title, onPressEnter, onChangeValue, value, icon}:any, ) => (
  <div className="input-group flex-nowrap">
    <span 
      className="input-group-text" 
      id="addon-wrapping">
        <IconByName icon={icon} />
    </span>
    <input 
      className="form-control" 
      placeholder={title} 
      onKeyUp={e => onEnterDo(e, onPressEnter)}
      onChange={e => onChangeValue(e)}/>
  </div>
)