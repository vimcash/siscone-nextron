import React from 'react'
import Interface from './Interfaces'
import { Div } from '../Div'
import Controller from './controller'

export const Label = 
  (props:Interface) => {
    const {
      getStyle,
      getText,
    } = Controller.getInstance(props)
    return (
      <Div className={getStyle()}>
        {getText()}
      </Div>
    )
  }