import { nodeFirebird } from "../../../lib/nodeFirebird"
import { dateTimeFormat, setDelay } from "../../../utils"
import { selectDbHost } from "../../../states/globalState/globalState"
import { useAppSelector } from "../../../hooks"

export const postConfig = async ({companyName, breakfastTime, lunchTime, dinnerTime, codeSize}) => {
  const dbHost = useAppSelector(selectDbHost)
  const run = await nodeFirebird(`SELECT * FROM SP_ADD_CONFIG('${companyName}','${breakfastTime}','${lunchTime}','${dinnerTime}',${codeSize})`,dbHost)
  console.log(run)
  await setDelay(.02)
  const configs = await nodeFirebird("SELECT FIRST(1) * FROM VW_CONFIG",dbHost)
  if(!configs)
      return undefined
  return configs[0]
}

export default postConfig

