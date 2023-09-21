import React from 'react'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
import '../assets/style.css'
import store from '../data/store'
import { AppFrame } from '../layout/index'

const MyApp = ({ Component, pageProps}:AppProps) => {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Siscone</title>
        </Head>
        <ToastContainer theme="dark"/>
        <AppFrame Component={Component} pageProps={pageProps}/>
      </React.StrictMode>
    </Provider>
  )
}

export default MyApp