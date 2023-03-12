import axios from "../../../lib/axios"
import { Config } from "../data/interfaces"

export const postAPIConfig = 
  (inConfig:Config) => axios({
    type: 'POST',
    url: '/api/postConfig',
    data: inConfig
  })

export default postAPIConfig