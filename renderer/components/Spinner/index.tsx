import React from 'react'
import { Div } from '../Div'
import style from './style.module.css'
export const Spinner = () => {
  return <Div className={style.container}>
    <Div className="spinner" />
  </Div>
}