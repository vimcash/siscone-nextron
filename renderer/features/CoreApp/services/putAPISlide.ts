import axios from "../../../lib/axios";

export const putAPISlide = 
  ({queryWhere}:{queryWhere:string}) => axios({
    type: 'PUT',
    url: '/api/putSlide',
    data: {queryWhere}
  })

export default putAPISlide