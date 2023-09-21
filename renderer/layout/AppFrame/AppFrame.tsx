import { useRouter } from 'next/router'
import React from 'react'
import { useAppDispatch } from '../../hooks'
import style from './style.module.css'
import { Header } from '../Header'
import { LeftMenu } from '../LeftMenu'
import { Div } from '../../components'
import Popup from '../Popup'

export const AppFrame = ({Component, pageProps}:any) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const isLogin = router.pathname != "/auth/login"
  return <Div className={style.container}> 
    <Popup dispatch={dispatch}/>
    {isLogin ? <LeftMenu dispatch={dispatch} router={router} /> : <></>}
    <Div className={style.contentContainer}>
      {isLogin ? <Header dispatch={dispatch}/> : <></>}
      <Div className={style.content}>
        <Component dispatch={dispatch} router={router} {...pageProps} />
      </Div>
    </Div>
  </Div>
}

export default AppFrame