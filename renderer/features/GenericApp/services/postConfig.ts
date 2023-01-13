import { nodeFirebird } from "../../../lib/nodeFirebird"
import { setDelay } from "../../../utils"

export const postConfig = async ({companyName, breakfastTime, lunchTime, dinnerTime, codeSize}) => {
  const run = await nodeFirebird(`SELECT * FROM SP_ADD_CONFIG('${companyName}','${breakfastTime}','${lunchTime}','${dinnerTime}',${codeSize})`)
  await setDelay(.02)
  const configs = await nodeFirebird("SELECT FIRST(1) * FROM VW_CONFIG")
  if(!configs)
      return undefined
  return configs[0]
}

export default postConfig

