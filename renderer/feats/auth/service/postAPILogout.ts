import { axios } from "../../../libs"

const postAPILogout = 
  () => axios({
    type: 'POST',
    url: 'https://api-dev.vimcashcorp.com/usuario/cerrarsesion'
  })


export default postAPILogout