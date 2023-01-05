import type { NextApiHandler } from "next"
import { nodeFirebird } from "../../lib/nodeFirebird"
import { dateTimeFormat } from "../../utils"

export const getConfig: NextApiHandler = 
  (req, res) => {
    if(req.method !== 'GET')
    {
      res.status(405).send({ message: 'Only GET requests allowed' })
      return
    }
    nodeFirebird("SELECT FIRST(1) * FROM CONFIG", e => {
      if(e){
        const data = {
          companyName: e[0].COMPANY_NAME,
          breakfastTime: dateTimeFormat(e[0].BREAKFAST_TIME),
          lunchTime: dateTimeFormat(e[0].LUNCH_TIME),
          dinnerTime: dateTimeFormat(e[0].DINNER_TIME),
          codeSize: e[0].CODE_SIZE
        }
        res.json({data:data})
      }
    })
  }
export default getConfig