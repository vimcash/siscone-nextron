import { useAppSelector } from "../../../hooks"
import { nodeFirebird } from "../../../lib/nodeFirebird"
import { selectDbHost } from "../../../states/globalState/globalState"

export const getConfig = async () => {
  const dbHost = useAppSelector(selectDbHost)
  const configs = await nodeFirebird("SELECT FIRST(1) * FROM VW_CONFIG")
  console.log(configs)
  return configs[0]
}

export default getConfig