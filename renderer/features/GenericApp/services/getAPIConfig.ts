import axios from "../../../lib/axios"
import { Request } from "../../../utils/interfaces/Request"

export const getAPIConfig = 
  () => axios({
    type: 'GET',
    url: '/api/getConfig'
  })

export default getAPIConfig