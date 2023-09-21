import React from 'react'
import { CategoryContainer } from '../../feats/administration/containers/CategoryContainer'

const Categories = ({dispatch, router}) => 
  <CategoryContainer  
    dispatch={dispatch}
    router={router} />

export default Categories