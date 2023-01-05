import React from 'react'
import { MenuContainer } from '../features/GenericApp/components'
import { useAppDispatch } from '../hooks'
import { nodeFirebird } from '../lib/nodeFirebird'
import { setCurrPage } from '../states/globalState'
import { dateTimeFormat } from '../utils'
const Home = () => {
  const dispatch = useAppDispatch()
  console.log(dateTimeFormat(new Date('1970/01/01 04:00:00')))
  dispatch(setCurrPage('home'))
  return <MenuContainer />
}

export default Home