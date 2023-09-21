import React from 'react'
import style from './style.module.css'
import { Div, Input, Label } from '../../components'
import Controller from './controller'
import { useAppSelector } from '../../hooks'
import { selectPopup } from './state'

const Popup = ({dispatch}) => {
  const {
    hidePopup,
    getPopupType
  } = Controller.getInstance(dispatch, useAppSelector(selectPopup))
  if(getPopupType() == 'hide')
    return <></>
  return (
    <Div className={style.container}>
      <Div className={style.content} contentCenter border>
        <Label text='Agregar producto' isTitle textCenter capitalize className="mb-2"/>
        <Label text='producto'/>
        <Input />
        <Label text='categoria'/>
        <Input />
        <Label text='desc'/>
        <Input />
      </Div>
      <Div 
        className={style.background} 
        onClick={() => hidePopup()}/>
    </Div>
  )
}

export default Popup