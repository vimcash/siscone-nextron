import React from 'react'
import { Label, Icon, Div } from '../../../components'
import style from './style.module.css'
const SubItem = () => <Div className={`${style.container}`}>
  <Icon icon="circle" size={20}/>
  <Label text="Prueba" />
</Div>


export default SubItem