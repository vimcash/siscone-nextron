import { axios } from "../../../libs";

const getCurrUser = 
  () => axios({
    type: 'GET',
    url: `http://localhost:3000/user/currentUser`
  })

export default getCurrUser