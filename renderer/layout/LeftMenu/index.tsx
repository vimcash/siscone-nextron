import React from 'react'
import style from './style.module.css'
import MenuItem from './MenuItem'
import Controller from './controller'
import { useAppSelector } from '../../hooks'
import { selectLeftMenu } from './state'
import { Div, Icon, Label } from '../../components'

export const LeftMenu = ({dispatch, router}:any) => {
  const {
    getCurrPage,
    redirect
  } = Controller.getInstance(dispatch, router, useAppSelector(selectLeftMenu))
  return <Div className={style.container}>
    <Div className={style.logo} flex ppx1>
      <Icon icon="logo" color="black"/>
    </Div>
    <Div ppx1 wFill>
      <MenuItem 
        title="Home"
        icon="home" 
        select={getCurrPage() == '/home'} 
        onClick={() => redirect('/home')}/>
      <Label text="operaciones" className={style.category}/>
      <MenuItem 
        title="Facturacion"
        icon="invoice" 
        select={getCurrPage() == '/ops/invoice'} 
        onClick={() => redirect('/ops/invoice')}/>
      <MenuItem 
        title="Inventario"
        icon="store" 
        select={getCurrPage() == '/ops/inventory'} 
        onClick={() => redirect('/ops/inventory')}/>
      <Label text="administracion" className={style.category}/>
      <MenuItem 
        title="Productos"
        icon="addData" 
        select={getCurrPage() == '/admin/products'} 
        onClick={() => redirect('/admin/products')} />
      <MenuItem 
        title="Categorias"
        icon="folder" 
        select={getCurrPage() == '/admin/categories'}
        onClick={() => redirect('/admin/categories')} />
      <MenuItem 
        title="Clientes"
        icon="users" 
        select={getCurrPage() == '/admin/clients'}
        onClick={() => redirect('/admin/clients')} />
    </Div>
  </ Div>
}