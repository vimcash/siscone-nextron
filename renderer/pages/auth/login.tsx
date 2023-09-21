import React from 'react'
import { LoginContainer } from '../../feats/auth/containers/LoginContainer'

const login = ({dispatch, router}) => 
  <LoginContainer 
    dispatch={dispatch} 
    router={router} />

export default login