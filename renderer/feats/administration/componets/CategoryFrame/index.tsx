import React from 'react'
import style from './style.module.css'
import { Card } from '../../../../components/Card'
import { Button, Div, Input } from '../../../../components'
import { Table } from '../../../../components/Table'
import Controller from './controllers'
import { useAppSelector } from '../../../../hooks'
import { selectIsLogin } from '../../../../data/state'
import AddCategoryForm from '../AddCategoryForm'
import { selectCategory } from '../../states/categoryState'

const CategoryFrame = ({dispatch, router}) => {
  const {
    showAddForm,
    getToogle
  } = Controller
    .getInstance(dispatch, useAppSelector(selectIsLogin), router, useAppSelector(selectCategory))
  return <>
    <Card 
      nameType="category" 
      title="Categorias" 
      desc="Agrega y modifica categorias" />
    <Div className={style.tableContainer} border boxShadow p3>
      <Div className={style.filterContainer}>
        <Div flex Wfill>
          <Input icon="search" className="col-xl-4"/>
          <Button 
            title="Agregar categoria" 
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
        getToogle() ? <AddCategoryForm /> : <></>
      }
      <Table 
        titles={["Categoria", "Desc"]} 
        className={getToogle() ? style.withForm : style.withoutForm}
        dataSource={[
          {data1: "How Innovation Works 1", dataCategory: 'Category', },
          {data1: "How Innovation Works 2", dataCategory: 'Category', },
          {data1: "How Innovation Works 3", dataCategory: 'Category', },
          {data1: "How Innovation Works 4", dataCategory: 'Category', },
          {data1: "How Innovation Works 5", dataCategory: 'Category', },
          {data1: "How Innovation Works 6", dataCategory: 'Category', },
          {data1: "How Innovation Works 8", dataCategory: 'Category', },
          {data1: "How Innovation Works 9", dataCategory: 'Category', },
          {data1: "How Innovation Works 10", dataCategory: 'Category', }, 
          {data1: "How Innovation Works 11", dataCategory: 'Category', }
        ]} />
    </Div>
  </>
}

export default CategoryFrame