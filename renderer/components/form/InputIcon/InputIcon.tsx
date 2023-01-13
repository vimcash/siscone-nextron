import React from 'react'
import { onPressEnter as onEnterDo } from '../../../utils'
import { IconByName } from '../../ui'

export const InputIcon = ({title, onPressEnter, onChangeValue, value, icon, name}:any, ) => (
  <div className="input-group flex-nowrap">
    <span 
      className="input-group-text" 
      id="addon-wrapping">
        <IconByName icon={icon} />
    </span>
    { name ? 
        <input
          id={name} 
          className="form-control" 
          placeholder={title} 
          onKeyUp={e => onEnterDo(e, onPressEnter)}
          onChange={e => onChangeValue(e)}
          value={value}
          autoFocus/>
        :
        <input 
          className="form-control" 
          placeholder={title} 
          onKeyUp={e => onEnterDo(e, onPressEnter)}
          onChange={e => onChangeValue(e)}
          value={value}/>
        }

  </div>
)