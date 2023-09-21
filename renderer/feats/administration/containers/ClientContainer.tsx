import React from 'react'
import ClientFrame from '../componets/ClientFrame'

export const ClientContainer = 
  ({dispatch, router}) => 
    <ClientFrame 
      dispatch={dispatch} 
      router={router}  />