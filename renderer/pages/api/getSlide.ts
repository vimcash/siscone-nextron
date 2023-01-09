import type { NextApiHandler } from "next"
import { nodeFirebird } from "../../lib/nodeFirebird"

const requestType = 'GET'
export const getSlide: NextApiHandler = 
  (req, res) => {
    if(req.method !== requestType)
    {
      res.status(405).send({ message: `Only ${requestType} requests allowed` })
      return
    }
    const { queryWhere } = req.body
    nodeFirebird(`SELECT CARD_CODE, CATEGORY, CREATED_AT FROM ST_GET_SLIDE_FILTER(${queryWhere || "'01.01.' || EXTRACT(YEAR FROM current_timestamp), current_date"})`, e => {
      if(!e){
        return res.json(undefined)
      }
      res.json(e)
    })
  }
export default getSlide