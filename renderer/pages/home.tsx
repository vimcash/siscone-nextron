import React from 'react'
import { MenuContainer } from '../features/GenericApp/components'
import { useAppDispatch } from '../hooks'
import { nodeFirebird } from '../lib/nodeFirebird'
import { setCurrPage } from '../states/globalState'
const Home = () => {
  const dispatch = useAppDispatch()
  nodeFirebird("SELECT FIRST(1) * FROM CONFIG",e => console.log(e));
  dispatch(setCurrPage('home'))
  return <MenuContainer />
}

export default Home