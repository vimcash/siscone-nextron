import React from 'react'
import { MenuContainer } from '../features/GenericApp/components'
import { useAppDispatch } from '../hooks'
import { setCurrPage } from '../states/globalState'
const Home = () => {
  const dispatch = useAppDispatch()
  dispatch(setCurrPage('home'))
  return <MenuContainer />
}

export default Home