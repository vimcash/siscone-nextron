import type { NextApiHandler } from "next"
import { nodeFirebird } from "../../lib/nodeFirebird"

const requestType = 'POST'
export const postSlide: NextApiHandler = 
  async (req, res) => {
    if(req.method !== requestType)
    {
      res.status(405).send({ message: `Only ${requestType} requests allowed` })
      return
    }
    const { 
      inCode
    } = req.body
    const slides = await nodeFirebird(`SELECT * FROM SP_ADD_SLIDE('${inCode}')`)
    if(slides[0].O_RETURN != 'OK')
      throw "Error"
    res.json(slides[0])
}
export default postSlide