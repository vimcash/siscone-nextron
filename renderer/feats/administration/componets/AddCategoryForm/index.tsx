import React from 'react'
import { Div, Input } from '../../../../components'

const AddCategoryForm = () => {
  return <Div flex mpb1>
    <Div colMd12 mie1>
      <Input title="categoria" />
    </Div>
    <Div colMd12 mie1>
      <Input title="desc" />
    </Div>
  </Div>

}

export default AddCategoryForm