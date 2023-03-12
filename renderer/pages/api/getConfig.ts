import type { NextApiHandler } from "next"
import { nodeFirebird } from "../../lib/nodeFirebird"
import { dateTimeFormat } from "../../utils"

const requestType = 'GET'
export const getConfig: NextApiHandler = 
  (req, res) => {
    if(req.method !== requestType)
    {
      res.status(405).send({ message: `Only ${requestType} requests allowed` })
      return
    }
  const configs = nodeFirebird("SELECT FIRST(1) * FROM VW_CONFIG")
    if(!configs)
      return res.json(undefined)
  configs[0].breakfastTime = dateTimeFormat(configs[0].BREAKFAST_TIME)
  configs[0].lunchTime = dateTimeFormat(configs[0].LUNCH_TIME)
  configs[0].dinnerTime = dateTimeFormat(configs[0].DINNER_TIME)
  res.json(configs)
  }
export default getConfig