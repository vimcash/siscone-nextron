import axios from "../../../lib/axios"

export const getAPIConfig = 
  () => axios({
    type: 'GET',
    url: '/api/getConfig'
  })

export default getAPIConfig