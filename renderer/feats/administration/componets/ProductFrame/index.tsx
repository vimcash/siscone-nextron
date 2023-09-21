import React from 'react'
import style from './style.module.css'
import { Card } from '../../../../components/Card'
import { Button, Div, Input, Label } from '../../../../components'
import { Table } from '../../../../components/Table'
import { formatDate } from '../../../../utils'
import { randomDate } from '../../../../utils/randomDate'
import Controller from './controllers'
import { useAppSelector } from '../../../../hooks'
import { selectIsLogin } from '../../../../data/state'
import AddProductForm from '../AddProductForm'
import { selectProduct } from '../../states/productState'
const ProductFrame = ({dispatch, router}) => {
  const {
    showAddForm,
    getToogle
  } = Controller
    .getInstance(dispatch, useAppSelector(selectIsLogin), router, useAppSelector(selectProduct))
  return <>
    <Card 
      nameType="accounting" 
      title="productos" 
      desc="Agrega y modifica productos" />
    <Div className={style.tableContainer} border boxShadow p3>
      <Div className={style.filterContainer}>
        <Div flex Wfill>
          <Input icon="search" className="col-xl-4"/>
          <Button 
            title="Agregar producto" 
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
        getToogle() ? <AddProductForm /> : <></>
      }
      <Table 
        titles={["Products", "Date", "Status", "Price"]} 
        joinCategory
        className={getToogle() ? style.withForm : style.withoutForm}
        dataSource={[
          {data1: "How Innovation Works 1", dataCategory: 'Category', data2: formatDate(new Date('2022-05-08'), 'dd-MM-yy'), data3: 'in stock', data4: 500},
          {data1: "How Innovation Works 2", dataCategory: 'Category', data2: formatDate(new Date('2023-07-08'), 'dd-MM-yy'), data3: 'in stock', data4: 500},
          {data1: "How Innovation Works 3", dataCategory: 'Category', data2: formatDate(new Date('2021-08-08'), 'dd-MM-yy'), data3: 'in stock', data4: 500},
          {data1: "How Innovation Works 4", dataCategory: 'Category', data2: formatDate(new Date('2021-04-08'), 'dd-MM-yy'), data3: 'in stock', data4: 500},
          {data1: "How Innovation Works 5", dataCategory: 'Category', data2: formatDate(new Date('2023-02-08'), 'dd-MM-yy'), data3: 'in stock', data4: 500},
          {data1: "How Innovation Works 6", dataCategory: 'Category', data2: formatDate(new Date('2023-02-08'), 'dd-MM-yy'), data3: 'in stock', data4: 500},
          {data1: "How Innovation Works 8", dataCategory: 'Category', data2: formatDate(new Date('2023-02-08'), 'dd-MM-yy'), data3: 'in stock', data4: 500},
          {data1: "How Innovation Works 9", dataCategory: 'Category', data2: formatDate(new Date('2023-02-08'), 'dd-MM-yy'), data3: 'in stock', data4: 500},
          {data1: "How Innovation Works 10", dataCategory: 'Category', data2: formatDate(new Date('2023-02-08'), 'dd-MM-yy'), data3: 'in stock', data4: 500}, 
          {data1: "How Innovation Works 11", dataCategory: 'Category', data2: formatDate(new Date('2023-02-08'), 'dd-MM-yy'), data3: 'in stock', data4: 500}
        ]} />
    </Div>
  </>
}

export default ProductFrame