import { nodeFirebird } from "../../../lib/nodeFirebird"

export const getConfig = async () => {
  const configs = await nodeFirebird("SELECT FIRST(1) * FROM VW_CONFIG")
  return configs[0]
}

export default getConfig