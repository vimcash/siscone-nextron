import type { NextApiHandler } from "next"
import { nodeFirebird } from "../../lib/nodeFirebird"

export const getConfig: NextApiHandler = 
  (request, response) => {
    nodeFirebird("SELECT FIRST(1) * FROM CONFIG", e => {
      if(e){
        const data = {
          companyName: e[0].COMPANY_NAME,
          breakfastTime: `${e[0].BREAKFAST_TIME.getHours()}:${e[0].BREAKFAST_TIME.getMinutes()}`,
          lunchTime: `${e[0].LUNCH_TIME.getHours()}:${e[0].LUNCH_TIME.getMinutes()}`,
          dinnerTime: `${e[0].DINNER_TIME.getHours()}:${e[0].DINNER_TIME.getMinutes()}`,
          codeSize: e[0].CODE_SIZE
        }
        response.json({data:data})
      }
    })
  }
export default getConfig