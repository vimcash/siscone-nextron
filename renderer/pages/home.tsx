import React from 'react'
import { MenuContainer } from '../features/GenericApp/components'
import { setCurrPage } from '../states/globalState'
import { getDispatch } from '../utils/returnDistpatch'
const Home = () => {
  const dispatch = getDispatch()
  dispatch(setCurrPage('home'))
  return <MenuContainer />
}

export default Home