import { Request } from "./Request"
import runner from 'axios'

export const axios = ({type, url, data}:Request) => {
  const headers = {
    'Content-Type': 'application/json',
  }
  switch(type){
    case 'GET': 
      return runner.get(url)
    case 'POST':
      return runner.post(url, data)
    case 'DELETE':
      return runner.delete(url)
    case 'PUT':
      return runner.put(url, data)
  }
}