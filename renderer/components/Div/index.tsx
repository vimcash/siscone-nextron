import React from 'react'
import Controller from './controller'

export const Div = (props:any) => {
  const {
    getStyle,
    getOnClick,
    getChildren
  } = Controller.getInstance(props)
  return <div className={getStyle()} onClick={getOnClick()}>
    {getChildren()}
  </div>
}