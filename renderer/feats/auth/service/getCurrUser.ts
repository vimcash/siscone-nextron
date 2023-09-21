import { axios } from "../../../libs";

const getCurrUser = 
  () => axios({
    type: 'GET',
    url: `https://api-dev.vimcashcorp.com/usuario/usuarioactual`
  })

export default getCurrUser