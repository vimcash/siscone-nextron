import type { NextApiHandler } from "next"
import { nodeFirebird } from "../../lib/nodeFirebird"
import { dateTimeFormat, setDelay } from "../../utils"

const requestType = 'POST'
export const postConfig: NextApiHandler = 
  async (req, res) => {
    if(req.method !== requestType)
    {
      res.status(405).send({ message: `Only ${requestType} requests allowed` })
      return
    }
    const { 
      companyName, 
      breakfastTime, 
      lunchTime,
      dinnerTime,
      codeSize
    } = req.body
    const run = await nodeFirebird(`SELECT * FROM SP_ADD_CONFIG('${companyName}','${breakfastTime}','${lunchTime}','${dinnerTime}',${codeSize})`)
    await setDelay(.02)
    const configs = await nodeFirebird("SELECT FIRST(1) * FROM VW_CONFIG")
    if(!configs)
        return undefined
    return configs[0]
  }
export default postConfig