import React from 'react'
import { Input, Label } from '../../../../components'
import style from './style.module.css'
import { Icon } from '../../../../components/Icon'
import { Button } from '../../../../components/Button'
import { Div } from '../../../../components'
import Controller from './controller'
import { useAppSelector } from '../../../../hooks'
import { selectLogin } from '../../state/loginState'

const LoginFrame = ({dispatch, router}) => {
  const {
    getUsername,
    getPassword,
    setUsername,
    setPassword
  } = Controller.getInstance(dispatch, false, router, useAppSelector(selectLogin))
  return <Div className={style.container}>
    <Icon size={35} color="black" icon="logo"/>
    <Input 
      icon="user" 
      placeholder="username"
      className='mb-1' 
      onChange={setUsername} 
      value={getUsername()} />
    <Input 
      icon="pass"
      placeholder="password" 
      onChange={setPassword} 
      value={getPassword()}
      className='mb-1' 
      password />
    <Button
      primary 
      title="Log in"/>
  </Div>
}

export default LoginFrame