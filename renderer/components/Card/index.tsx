import React from 'react'
import { Label } from '../Label'
import Image from 'next/image'
import Controller from './controller'
import { Div } from '../Div'

export const Card = ({nameType, title, desc}:any) => {
  const {
    getTypeByName,
    style
  } = Controller
  const type = getTypeByName(nameType)
  if(!type)
    return <></>
  return (
    <Div className={`${style.container} ${type.color}`}>
      <Div className={style.text}>
        <Label 
          text={title}
          className={style.title}
          capitalize />
        <Label
          text={desc}
          className={style.desc} />
      </Div>
      <Div className={style.img}>
        <Image src={type.img} />
      </Div>
    </Div>
  )
}