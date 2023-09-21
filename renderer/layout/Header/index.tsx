import React from 'react'
import style from './style.module.css'
import { Icon } from '../../components/Icon'
import { Div, Label } from '../../components'
import Controller from './controller'
import { Button } from '../../components/Button'
export const Header = ({dispatch}) => {
  const {
    toogleMenu
  } = Controller.getInstance(dispatch)
  return (
    <Div className={style.container}>
      <Button 
        icon="menu" 
        headerIcon 
        className={style.menuBtn}/>
      <span style={{width:"30px", height:"30px", border:"2px solid black", borderRadius:"100%"}}></span>
    </Div>
  )
}