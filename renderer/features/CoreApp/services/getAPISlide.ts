import axios from "../../../lib/axios";

export const getAPISlide = 
  ({queryWhere}:{queryWhere:string}) => axios({
    type: 'GET',
    url: '/api/getSlide',
    data: {queryWhere}
  })

export default getAPISlide