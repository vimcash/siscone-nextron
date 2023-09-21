import React from 'react'
import { Div, Input } from '../../../../components'

const AddClientForm = () => {
  return <Div flex mpb1>
    <Div colMd6 mie1>
      <Input title="nombre" />
    </Div>
    <Div colMd6 mie1>
      <Input title="apellido" />
    </Div>
    <Div colMd4 mie1>
      <Input title="contacto" />
    </Div>
    <Div colMd8 mie1>
      <Input title="desc" />
    </Div>
  </Div>

}

export default AddClientForm