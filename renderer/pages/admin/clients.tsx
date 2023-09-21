import React from 'react'
import { ClientContainer } from '../../feats/administration'

const Clients = ({dispatch, router}) => 
  <ClientContainer
    dispatch={dispatch}
    router={router} />
export default Clients