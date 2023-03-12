import axios from "../../../lib/axios";

export const getAPIYears = 
  () => axios({
    type: 'GET',
    url: '/api/getYears'
  })

export default getAPIYears