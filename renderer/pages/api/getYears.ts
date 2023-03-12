import type { NextApiHandler } from "next"
import { nodeFirebird } from "../../lib/nodeFirebird"

const requestType = 'GET'
export const getYears: NextApiHandler = 
  (req, res) => {
    if(req.method !== requestType)
    {
      res.status(405).send({ message: `Only ${requestType} requests allowed` })
      return
    }
    const years = nodeFirebird(`SELECT YEARS FROM VW_SLIDE_YEARS ORDER BY YEARS DESC`)
    res.json(years)
  }
export default getYears