import { useRouter } from 'next/router'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import style from './style.module.css'
import { Header } from '../Header'
import { LeftMenu } from '../LeftMenu'
import { Div, Label, Spinner } from '../../components'
import Popup from '../Popup'
import { selectAppReady } from '../../data/state'
import Controller from './controller'

export const AppFrame = ({Component, pageProps}:any) => {
  const {
    getDispatch,
    getRouter,
    getAppReady,
    getInLogin
  } = Controller.getInstance(useAppDispatch(), useAppSelector(selectAppReady), useRouter())
  return <Div className={style.container}> 
    <Popup dispatch={getDispatch()}/>
    {getInLogin() ? <></> : <LeftMenu dispatch={getDispatch()} router={getRouter()} /> }
    <Div className={style.contentContainer}>
      {getInLogin() ? <></> : <Header dispatch={getDispatch()}/> }
      <Div className={style.content}>
        <Component dispatch={getDispatch()} router={getRouter()} {...pageProps} />
      </Div>
    </Div>
  </Div>
}

export default AppFrame