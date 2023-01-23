import { nodeFirebird } from "../../../lib/nodeFirebird"
let query
export const putSlide = (queryWhere, category) => {
  if(queryWhere)
    query = queryWhere
  const select = `SELECT 
      CARD_CODE, 
      CATEGORY,
      PRICE,
      SUBSIDY, 
      CREATED_AT 
    FROM 
      ST_GET_SLIDE_FILTER(${query || "'01.01.' || EXTRACT(YEAR FROM current_timestamp), current_date"})`
  
  const slides = nodeFirebird(category == 'GENERAL' ? select : `${select} WHERE CATEGORY = '${category}'`)
  return slides
}

export default putSlide
