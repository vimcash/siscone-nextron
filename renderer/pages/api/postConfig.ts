import type { NextApiHandler } from "next"
import { nodeFirebird } from "../../lib/nodeFirebird"
import { dateTimeFormat, setDelay } from "../../utils"

const requestType = 'POST'
export const postConfig: NextApiHandler = 
  (req, res) => {
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
    nodeFirebird(`SELECT * FROM SP_ADD_CONFIG('${companyName}','${breakfastTime}','${lunchTime}','${dinnerTime}',${codeSize})`, async e => {
      if(!e)
        return res.json(undefined)
      
      await setDelay(.02)
      nodeFirebird("SELECT FIRST(1) * FROM CONFIG", e => {
        if(!e)
          return res.json(undefined)
        e[0].breakfastTime = dateTimeFormat(e[0].BREAKFAST_TIME)
        e[0].lunchTime = dateTimeFormat(e[0].LUNCH_TIME)
        e[0].dinnerTime = dateTimeFormat(e[0].DINNER_TIME)
        res.json(e[0])
      })
    })
  }
export default postConfig