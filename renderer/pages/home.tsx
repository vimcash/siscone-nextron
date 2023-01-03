import React from 'react'
import { TemplateForm } from '../features/Template';

const Home = () =>{
  const pjson = require('../../package.json');
  console.log(`version: ${pjson.version}`, `JWT_KEY: ${process.env.JWT_KEY}`)
  return (
    <TemplateForm />
  )
}

export default Home