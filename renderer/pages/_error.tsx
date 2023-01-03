import React from 'react'

const Index = () =>{
  const pjson = require('../../package.json');
  console.log(`version: ${pjson.version}`, `JWT_KEY: ${process.env.JWT_KEY}`)
  return (
    <label htmlFor="">error</label>
  )
}

export default Index