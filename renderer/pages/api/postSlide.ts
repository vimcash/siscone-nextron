import type { NextApiHandler } from "next"
import { nodeFirebird } from "../../lib/nodeFirebird"

const requestType = 'POST'
export const postSlide: NextApiHandler = 
  (req, res) => {
    if(req.method !== requestType)
    {
      res.status(405).send({ message: `Only ${requestType} requests allowed` })
      return
    }
    const { 
      inCode
    } = req.body
    nodeFirebird(`SELECT * FROM SP_ADD_SLIDE('${inCode}')`, async e => {
      if(e[0].O_RETURN != 'OK')
      {
        throw "Error"
      }
      res.json(e[0])
    })
  }
export default postSlide