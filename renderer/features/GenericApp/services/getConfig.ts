import { nodeFirebird } from "../../../lib/nodeFirebird"
import { dateTimeFormat } from "../../../utils"

export const getConfig = async () => {
  const configs = await nodeFirebird("SELECT FIRST(1) * FROM VW_CONFIG")
  console.log(configs)
  return configs[0]
}

export default getConfig