import React from 'react'
import { Div, Input } from '../../../../components'

const AddProductForm = () => {
  return <Div flex mpb1>
    <Div colMd4 mie1>
      <Input title="producto" />
    </Div>
    <Div colMd4 mie1>
      <Input title="codigo"/>
    </Div>
    <Div colMd4 mie1>
      <Input title="category" />
    </Div>
    <Div colMd12 mie1>
      <Input title="desc" />
    </Div>
  </Div>

}

export default AddProductForm