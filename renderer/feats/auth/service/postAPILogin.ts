import { axios } from "../../../libs"

const postAPILogin = 
  (inUser:any) => axios({
    type: 'POST',
    url: 'http://localhost:3000/user/login',
    data: inUser
  })


export default postAPILogin