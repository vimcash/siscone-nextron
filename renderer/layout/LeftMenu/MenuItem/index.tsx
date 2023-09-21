import React from 'react'
import style from './style.module.css'
import { Div, Label } from '../../../components'
import { Icon } from '../../../components/Icon'
import SubItem from '../SubItem'
const MenuItem = ({title, icon, select, onClick}:any) => 
  <Div className={style.container} onClick={onClick}>
    <Div className={`${style.item} ${select ? style.select : style.noSelect}`}>
      <Icon icon={icon} size={select ? 21 : 20} />
      <Label text={title}/>
    </Div>
  </Div>

export default MenuItem