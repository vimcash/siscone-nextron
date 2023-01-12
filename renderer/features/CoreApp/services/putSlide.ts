import { nodeFirebird } from "../../../lib/nodeFirebird"

export const putSlide = async (queryWhere) => {
  const slides = await nodeFirebird(`SELECT CARD_CODE, CATEGORY, CREATED_AT FROM ST_GET_SLIDE_FILTER(${queryWhere || "'01.01.' || EXTRACT(YEAR FROM current_timestamp), current_date"})`)
  return slides
}

export default putSlide
