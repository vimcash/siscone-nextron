import axios from "../../../lib/axios";

export const postAPISlide = 
  ({inCode}:{inCode:string}) => axios({
    type: 'POST',
    url: '/api/postSlide',
    data: {inCode}
  })

export default postAPISlide