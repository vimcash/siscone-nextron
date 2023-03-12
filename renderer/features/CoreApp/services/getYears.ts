import { nodeFirebird } from "../../../lib/nodeFirebird"

export const getYears = async () => {
  const years = await nodeFirebird(`SELECT YEARS FROM VW_SLIDE_YEARS ORDER BY YEARS DESC`)
  return years
}

export default getYears