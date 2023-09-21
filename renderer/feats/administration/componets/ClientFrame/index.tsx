import React from 'react'
import style from './style.module.css'
import { Card } from '../../../../components/Card'
import { Button, Div, Input } from '../../../../components'
import { Table } from '../../../../components/Table'
import Controller from './controllers'
import { useAppSelector } from '../../../../hooks'
import { selectIsLogin } from '../../../../data/state'
import { selectCategory } from '../../states/categoryState'
import AddClientForm from '../AddClientForm'

const ClientFrame = ({dispatch, router}) => {
  const {
    showAddForm,
    getToogle
  } = Controller
    .getInstance(dispatch, useAppSelector(selectIsLogin), router, useAppSelector(selectCategory))
  return <>
    <Card 
      nameType="contacts" 
      title="Clientes" 
      desc="Agrega y modifica clientes" />
    <Div className={style.tableContainer} border boxShadow p3>
      <Div className={style.filterContainer}>
        <Div flex Wfill>
          <Input icon="search" className="col-xl-4"/>
          <Button 
            title="Agregar Cliente" 
            className={`${style.button} col-xl-3 ms-1`}
            primary
            primarySelected={getToogle()}
            onClick={showAddForm}/>
        </Div>
        <Button 
          icon="filter"
          iconSize={19} 
          iconButton />
      </Div>
      {
        getToogle() ? <AddClientForm /> : <></>
      }
      <Table 
        titles={["Nombre", "Desc"]} 
        className={getToogle() ? style.withForm : style.withoutForm}
        joinCategory
        dataSource={[
          {data1: 'Juan Pablo', data2: 'Duarte', dataCategory: 'Category', },
          {data1: 'Peter', data2: 'Zafra', dataCategory: 'Category', },
          {data1: 'Frederick', data2: 'Pascal', dataCategory: 'Category', },
          {data1: 'Marcos', data2: 'Lopez', dataCategory: 'Category', },
          {data1: 'Patrick', data2: 'Ortega', dataCategory: 'Category', },
          {data1: 'Martin', data2: 'Polar', dataCategory: 'Category', },
          {data1: 'Pedro', data2: 'Castillo', dataCategory: 'Category', },
          {data1: 'Frederick', data2: 'Bastial', dataCategory: 'Category', },
          {data1: 'Martin', data2: 'Niche', dataCategory: 'Category', },
          {data1: 'Francisco', data2: 'Pirlo', dataCategory: 'Category', },
        ]} />
    </Div>
  </>
}

export default ClientFrame