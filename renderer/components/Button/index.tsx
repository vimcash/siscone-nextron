import React from 'react'
import style from './style.module.css'
import { Icon } from '../Icon'
import { Div } from '../Div'
import Controller from './controller'
export const Button = 
  (props:any) => {
    const {
      getStyle,
      getIcon,
      getIsHeaderIcon,
      getOnClick,
      getTitle,
      getIconSize
    } = Controller.getInstance(props)
    return <button 
          className={getStyle()}
          onClick={getOnClick()}>
        <Div>
          {
            getIsHeaderIcon() ? 
              <Icon icon={getIcon()} size={getIconSize() || 15}/> :
              getTitle()
          }
        </Div>
      </button>}